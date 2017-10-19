.. _faq:


FAQ
===

WebExtensions Experiements have many similarities to traditional add-ons,
therefore a lot of general documentation is already available on
`developer.mozilla.org <https://developer.mozilla.org>`_. The following
questions and answers are specific to WebExtensions experiments and should help
you with common issues.


How to produce log messages from an experiment api.js file?
-----------------------------------------------------------
On Firefox versions >= 55, the ``console`` API object is already available in
the sandboxed environment where the ``api.js`` file is executed, on Firefox
versions where it wasn't yet available you can define it using the ``Console.jsm``
module:

.. code-block:: javascript

    const {ConsoleAPI} = Cu.import("resource://gre/modules/Console.jsm", {});

    const console = new ConsoleAPI({
      prefix: "webext-experiment-MYAPINAME",
    });


How do I get an URI reference to the files in my experiment?
------------------------------------------------------------
You may need an URI referencing files within your extension, for example to
load a frame script when your API methods are being triggered. If you have a
file named ``browserScript.js`` in the root of your add-on, you can reference it
using the URI ``resource://extension-NAMESPACE-api/browserScript.js``, where
``NAMESPACE`` is the namespace defined in your ``schema.json`` file.

Can I include a chrome.manifest in an experiment?
-------------------------------------------------

The experiments do not support the 'chrome.manifest', and it will be ignored if
included in the experiments add-on source directory. If you need an URI which
points to assets packaged within the experiment (e.g. an image, an additional
.jsm file, a frame script, etc.), please read the `question about URI
references <How do I get an URI reference to the files in my experiment?_>`_.



If you have any more questions you can't find an answer to please `get in touch <https://wiki.mozilla.org/Add-ons#Getting_in_touch>`_.
