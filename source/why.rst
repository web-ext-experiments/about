Why?
====

WebExtensions Experiments provide a way for developers to tinker with new APIs for WebExtensions. They work by allowing WebExtensions APIs to be written in an another extension. They can be used to prototype APIs for landing in Firefox, or for use on `Nightly <https://nightly.mozilla.org/>`_ or `Developer Edition <https://developer.mozilla.org/en-US/Firefox/Developer_Edition>`_.

.. note:: If you simply want to request a WebExtensions API, please `file a bug  <https://bugzilla.mozilla.org/enter_bug.cgi?product=Toolkit&component=WebExtensions:%20Untriaged>`_. These will be triaged and processed in a `bi-weekly public meeting <https://wiki.mozilla.org/Add-ons/Contribute/Triage>`_.

.. note:: If you'd like to land a WebExtensions API straight into Firefox, are familiar with building `mozilla-central <https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction>`_, working with `Bugzilla <https://bugzilla.mozilla.org/>`_, the `try server <https://treeherder.mozilla.org/#/jobs?repo=try>`_, then please `file a bug <https://bugzilla.mozilla.org/enter_bug.cgi?product=Toolkit&component=WebExtensions:%20Untriaged>`_ and follow the usual Firefox development process.

Overview
--------

Terminology:

:experiment: A bootstrapped add-on that contains code to expose a WebExtensions API.
:extension: A WebExtension add-on that uses the experiment add-on as a dependency.

.. note:: The `experiment` and the `extension` are both add-ons. The `experiment` is a legacy style add-on, while the `extension` is a WebExtension.

Experiments allow you to:

* Test and experiment with an API without having to build Firefox at all.
* Write and distribute the API to a set of users without them having to build Firefox.
* Then commit to (or get help committing to) mozilla-central_.

.. note:: We will not add all experiments to Firefox. The goal is to judge each Experiment on its own merit and value.

Some key points:

* The API is implemented in the experiment add-on.
* The API is available in the browser namespace - not in chrome.
* Breaking changes could occur in the experiment, but are discouraged.
* WebExtension add-ons using the API depend on the experiment add-on.
* WebExtension add-ons using the API declare its use in the manifest
  permissions.

How do they work?
~~~~~~~~~~~~~~~~~

Experiments are a bootstrapped add-on. They have a special type_ `256` that tells Firefox that they are an experiment. Firefox loads the `schema.json` into Firefox and then the APIs become available to WebExtensions.

Where do they work?
~~~~~~~~~~~~~~~~~~~

Currently experiments can only be loaded in Firefox Nightly and Firefox Developer Edition.

Please see the :ref:`policy` page.

.. _Bugzilla: https://bugzilla.mozilla.org
.. _mozilla-central: https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction
.. _type: https://developer.mozilla.org/en-US/Add-ons/Install_Manifests#type
