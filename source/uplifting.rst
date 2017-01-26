.. _uplifting:

Uplifting
=========

Once you've got an experiment the hope is that it gets merged into Firefox and mozilla-central. But before that happens there's a few things that should happen.

Adding to github
----------------

.. note:: This is optional.

Tell people
-----------

The first step is to `file an issue <https://github.com/web-ext-experiments/about/issues/new>`_ against this repository. In that issue please outline:

* where your experiment is located
* a quick overview of what it does
* any bugzilla bugs that it might address
* if you'd like to move your repository over to this organisation and we can create a repository for you

We'll then include these in our `bi-weekly community triage meeting <https://wiki.mozilla.org/Add-ons/Contribute/Triage#Next_Meeting>`_.

There's a few emails and IRC channels that would also like to `know about your experiment <https://wiki.mozilla.org/Add-ons#Getting_in_touch>`_.

Updating this documentation
---------------------------

It would be great to add it to this documentation too. If you would like to, please send a `pull request to this repository <https://github.com/web-ext-experiments/about>`_.

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
