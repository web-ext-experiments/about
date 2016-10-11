Why?
====

As we move to a world of WebExtensions for add-ons we need to be able to provide more APIs than ever before to our users. We need to be able to go beyond what chrome provides to allow more flexibility and customisation than other browsers.

At the same time, we need to be able to move faster than the Firefox train and allow developers to be able to quickly develop and experiment with APIs. Those APIs would land in an add-on and as APIs become stable and supported they could be moved down into mozilla-central and move from "experimental" to "stable".

To repeat, this is the overall goal: be an area to allow developers to develop and experiment with APIs.

Key points:

* We would land experimental APIs in an add-on outside of Firefox.
* All add-ons using WebExtensions Experiments would be dependent upon the WebExtensions Experiment.
* The use of WebExtensions Experiments would be declared in the manifest through a permission.
* APIs would be available in the browser namespace, and not in chrome.
* Breaking changes could occur to the WebExtensions Experiments. But would be discouraged.

This is not the only way to write a WebExtension API, it is just one of them. 

If you are familiar with building mozilla-central_, working with Bugzilla_ and try server and other Mozilla infrastructure, then you might find that committing the bug straight to mozilla-central is a better choice.

Experiments if intended to provide another avenue and if you'd prefer to just go with adding in directly into mozilla-central, then please go file a Bugzilla_ bug and get started.

If not, then keep reading.

Extensions allows you to:

* Test and experiment with an API without having to build Firefox at all.
* Write and distribute the API to a set of users without them having to build Firefox.
* Then commit to (or get help committing to) mozilla-central_.

Please note: before coding your Experiment you should know it's not always assumed that all Experiments will get added to Firefox, the goal is to judge each Experiment on its own merit and value.

How do they work?
~~~~~~~~~~~~~~~~~

Experiments are a bootstrapped add-on. They have a special type_ `256` that tells Firefox that they are an experiment. The experiment loads the `schema.json` into Firefox and then the APIs become available to WebExtensions.

Where do they work?
~~~~~~~~~~~~~~~~~~~

Currently experiments can only be loaded in Firefox Nightly and Firefox Developer Edition. 

Please see the :ref:`policy` page.

.. _Bugzilla: https://bugzilla.mozilla.org
.. _mozilla-central: https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction
.. _type: https://developer.mozilla.org/en-US/Add-ons/Install_Manifests#type