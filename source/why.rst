Why?
====

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