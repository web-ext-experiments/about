Why?
====

Experiments are a way to allow the development of new APIs for WebExtensions, they allow WebExtension APIs to be written in an another extension. They can be used to prototype APIs for landing in Firefox, or just creating APIs for use on Nightly or Developer Edition.

.. note:: If you want to land an API in Firefox and are familiar with building mozilla-central_, working with Bugzilla_ and try server and other Mozilla infrastructure, then you might find that committing the code straight to mozilla-central is a better choice.

Overview
--------

An experiment is:

* An extension that contains the experiment code and exposes a WebExtensions API.
* One more WebExtensions that use the experiment extension as a dependency.

Experiments allows you to:

* Test and experiment with an API without having to build Firefox at all.
* Write and distribute the API to a set of users without them having to build Firefox.
* Then commit to (or get help committing to) mozilla-central_.

Please note: before coding your Experiment you should know it's not always assumed that all Experiments will get added to Firefox, the goal is to judge each Experiment on its own merit and value.

Some key points:

* Experimental APIs would be in an add-on.
* All add-ons using the new API would be dependent upon the WebExtensions Experiments add-on.
* The use of WebExtensions Experiments would be declared in the manifest through a permission.
* APIs would be available in the browser namespace, and not in chrome.
* Breaking changes could occur to the WebExtensions Experiments. But would be discouraged.

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
