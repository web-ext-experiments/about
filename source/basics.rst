Basics
======

WebExtensions Experiments provide a way for developers to tinker with new APIs for WebExtensions. They allow new WebExtensions APIs to be implemented in an extension. They can be used to prototype APIs for landing in Firefox, or for use on `Nightly <https://nightly.mozilla.org/>`_ or `Developer Edition <https://developer.mozilla.org/en-US/Firefox/Developer_Edition>`_.

.. note:: If you simply want to request a WebExtensions API, please see `this page on the Firefox wiki <https://wiki.mozilla.org/WebExtensions/NewAPIs>`_.

.. note:: If you'd like to land a WebExtensions API straight into Firefox, are familiar with building `mozilla-central <https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction>`_, working with `Bugzilla <https://bugzilla.mozilla.org/>`_, the `try server <https://treeherder.mozilla.org/#/jobs?repo=try>`_, then please `file a bug <https://bugzilla.mozilla.org/enter_bug.cgi?product=WebExtensions&component=Untriaged>`_ and follow the usual Firefox development process.

Overview
--------

An *experiment* refers to all the code that implements some new
experimental WebExtension API.  An experiment may be placed in its own
``.xpi`` file, or it may be bundled with an extension that uses it
(i.e., have all the experiment code contained in the same ``.xpi`` file 
as the extension that uses it).


.. note:: When experiments were originally created they used a format  based on ``install.rdf`` but this format is deprecated and should not be used.

Experiments allow you to:

* Test and experiment with an API without having to build Firefox at all.
* Write and distribute the API to a set of users without them having to build Firefox.
* Then commit to (or get help committing to) mozilla-central_.

.. note:: We will not add all experiments to Firefox. The goal is to judge each Experiment on its own merit and value.

Some key points:

* The API is implemented in the experiment.
* The API is available in the browser namespace - not in chrome.
* Breaking changes could occur in the experiment, but are discouraged.

How do they work?
~~~~~~~~~~~~~~~~~

For general documentation about designing and developing WebExtension
APIs, see the documentation at
`firefox-source-docs.mozilla.org <https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/index.html>`_.

If you prefer working examples, here are a few WebExtensions that use
bundled experiments:

* Mike Conley's `ohnoreflow <https://github.com/mikeconley/ohnoreflow>`_
* Rob Helmer's `crashme <https://github.com/rhelmer/webext-experiment-crashme>`_

Non-bundled Experiments
~~~~~~~~~~~~~~~~~~~~~~~

The documentation above explains how to create an experimental API that is
bundled with a WebExtension.
It is also possible to create a WebExtension that depends on
an experimental API contained in a different ``.xpi`` file,
though we are considering removing this capability in a future release.
In the mean time, to create an extension that uses an experimental API from
a different extension, you must:

* `Include an extension ID <https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/applications>`_
  in the manifest of the extension that contains the implementation of the API.
  The ID *must* be of the form ``name@experiments.addons.mozilla.org``
  where ``name`` is a string that identifies the experiment.
* Include the string ``"experiments.name"`` in the
  `permissions <https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions>`_
  property in the manifest of any extension that will use the API.
  The string ``name`` must be replaced by the name in the ID of the
  extension that provides the API.

In this case, a user must manually install the experiment when they install the
WebExtension that uses the experimental API.
The WebExtension will be automatically disabled unless/until the experiment
it depends on is installed and enabled.




Where do they work?
~~~~~~~~~~~~~~~~~~~

Currently experiments can only be loaded in Firefox Nightly and Firefox Developer Edition.

Please see the :ref:`policy` page.

.. _Bugzilla: https://bugzilla.mozilla.org
.. _mozilla-central: https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Introduction
.. _type: https://developer.mozilla.org/en-US/Add-ons/Install_Manifests#type
