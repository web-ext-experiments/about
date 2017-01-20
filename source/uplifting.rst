.. _uplifting:

Uplifting
=========

Once you've got an experiment the hope is that it gets merged into Firefox and mozilla-central. But before that happens there's a few things that should happen.

Adding to github
----------------

.. note:: This is optional.

If you'd like to add your experiment to the main web-ext-experiments repository, you can do so by filing an issue on web-ext-experiments. We'll create a new repository and then you can send a pull request to it. This is optional.

Tell people
-----------

There's a few emails and IRC channels that would like to `know about your experiment <https://wiki.mozilla.org/Add-ons#Getting_in_touch>`_.

It would be great to add it to this documentation too so please send a `pull request to this repository <https://github.com/web-ext-experiments/about>`_.

At this point your experiment works, that's great. The next steps are optional, but we hope they would happen.

Landing in Firefox
------------------

.. note:: This is optional.

For it to land in mozilla-central a few things are going to have to happen.

* It should follow the `code quality guidelines <https://wiki.mozilla.org/WebExtensions/Hacking>`_.
* There should be mochi and xpcshell tests at 100% coverage of the API.
* There should be some documentation on the API.
* There should be a review (even if its just cursory) by the following: the security team, the privacy team, a code review by the engineering team and the UX team (where relevant).
* If the API requires a permission, ensure to land the corresponding permissions string.

For more information on what is likely to be accepted, please check out the :ref:`New` API Guidelines.

The best way to do this is by filing a bug in Bugzilla and we can start to work through the steps. File a bug under `Toolkit > WebExtensions: Experiments <https://bugzilla.mozilla.org/enter_bug.cgi?product=Toolkit&component=WebExtensions:%20Experiments>`_ and that process can be started.

What if it doesn't land in Firefox?
-----------------------------------

It can still be used by Nightly and Developer Edition.
