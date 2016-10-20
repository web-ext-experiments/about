import glob
import hashlib
import json
import os
import pprint
import xml
import zipfile

from xml.dom import minidom

URL_ROOT = 'https://andymckay.github.io/about/'


def text(dom, x):
    return dom.getElementsByTagName('em:' + x)[0].childNodes[0].wholeText


def get_install(addon_file):
    result = {'signed': False}

    with zipfile.ZipFile(addon_file, 'r') as xpi:
        dom = minidom.parse(xpi.open('install.rdf', 'r'))
        for key in ['id', 'name', 'type', 'version']:
            result[key] = text(dom, key)

        if 'META-INF/mozilla.rsa' in xpi.namelist():
            result['signed'] = True

    return result


def get_type(addon_file):
    with zipfile.ZipFile(addon_file, 'r') as xpi:
        if 'install.rdf' in xpi.namelist():
            return 'experiments'

    return 'extension'


def get_hash(addon_file):
    return hashlib.sha512(open(addon_file, 'r').read()).hexdigest()


def generate_update(addons):
    addons_data = {}
    for key in addons:

        data = {}
        updates = []
        for version in addons[key]['versions']:
            updates.append({
                'version': version['data']['version'],
                'update_link': URL_ROOT + version['filename'],
                'update_hash': 'sha512:' + version['hash'],
                '_extra': version['data']
            })
        addons_data[version['data']['id']] = {'updates': updates}

    output = {'addons': addons_data}
    return json.dumps(output, indent=2)


def get_addons(path):
    addons = {}
    for addon_file in glob.glob('{}/*/*.xpi'.format(path)):
        name = os.path.dirname(addon_file)
        addons.setdefault(name, {
            'versions': [],
            'filetype': get_type(addon_file)
        })
        if addon_file.endswith('.xpi'):
            data = get_install(addon_file)
            addons[name]['versions'].append({
                'filename': addon_file,
                'data': data,
                'hash': get_hash(addon_file)
            })

    return addons


if __name__=='__main__':
    for path in ['experiments', 'extensions']:
        addons = get_addons(path)
        output = generate_update(addons)
        open('{}/update.json'.format(path), 'w').write(output)
