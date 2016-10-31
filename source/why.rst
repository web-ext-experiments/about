Why?
====

WebExtensions Experiments provide a way for developers to tinker with new APIs for WebExtensions. They work by allowing WebExtensions APIs to be written in an another extension. They can be used to prototype APIs for landing in Firefox, or for use on `Nightly <https://nightly.mozilla.org/>`_ or `Developer Edition <https://developer.mozilla.org/en-US/Firefox/Developer_Edition>`_.

If you want to land a WebExtensions API in Firefox and are familiar with building `mozilla-central <https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction>`_, working with `Bugzilla <https://bugzilla.mozilla.org/>`_, the `try server <https://treeherder.mozilla.org/#/jobs?repo=try>`_, and other Mozilla infrastructure, then WebExtensions Experiments is for you.

.. note:: If you simply want to request a WebExtensions API, please file a bug `here <https://bugzilla.mozilla.org/enter_bug.cgi?product=Toolkit&component=WebExtensions>`_. These will be triaged and processed in a `bi-weekly public meeting <https://wiki.mozilla.org/Add-ons/Contribute/Triage>`_.

Overview
--------

Terminology:

:experiment: An experiment is an extension that contains the experiment code and exposes a WebExtensions API.
:extension: Is a WebExtension that uses the experiment extension as a dependency.

It should be noted both the `experiment` and the `extension` are both extensions. One is a legacy style bootstrapped `extension` and the other is WebExtension. We'll try and use the term `experiment` to distinguish between the two.

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
