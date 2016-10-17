This repository builds out the documentation on readthedocs.org.

Please see the documentation here: https://webextensions-experiments.readthedocs.io

### Updating this documentation

Alter the documentation, just make a pull request to this repository. When it is merged it will update read the docs automatically.

### Adding a version of an experiment

If you'd like to add in a new version of an experiment then you need to do the following:

1. Ensure that in the add-on the updateURL is pointing to the following address: https://web-ext-experiments.github.io/about/experiments/about.json - please see https://developer.mozilla.org/en-US/Add-ons/Updates for more on that.

2. Add an experiment version to this respository in the experiments directory. If a directory doesn't exist for your add-on, create a new one.

3. Run `python generate.py` this will generate the `update.json` file so that if you update your experiment, users will get the new version.

4. Commit your version and the new `update.json` file. Repeat this process each time you do a new version.
