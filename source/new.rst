.. _new:

New API Guidelines
==================

There are some basic principles around WebExtensions APIs as they currently stand. Any API that wants to get merged into Firefox would need to meet these principles.

* Security: the API should not expose an unacceptable risk to the end user.
* Privacy: similar to above.
* Performance: APIs should be async by default and focus on not causing jank, hangs or any sort of bad performance in Firefox.
* Multi-process: all APIs need to be multi-process aware.
* Useful: APIs that land in Firefox should be useful since all APIs have a maintenance burden.
* High level: WebExtensions provide a known public API layer on top of Mozilla code, allowing the underlying code to change quicker and easier.
* Alternatives: Do alternatives exist for example, WebAPIs?

Compared to legacy Firefox add-ons there is a significant sandbox around WebExtension APIs that is very restrictive. Access to priviledged APIs within Firefox, preferences, arbitrary File System access, socket access and so on are restricted (at the time of writing this documentation). APIs that break out of this sandbox will need very clear justification for why.

Triaging APIs
-------------

If you file a bug asking for an API it will go through the bug triage process. Since this is useful to how APIs land, here's what currently happens in bug triages:

Weekly new bug triage
~~~~~~~~~~~~~~~~~~~~~

We look at all new bugs in an attempt to spot serious bugs, regressions or other issues. We try to give each bug a priority and mark as *[triaged]* in the whiteboard. The point here is to do an initial triage and catch critical things. We also label bugs that might be good for contributors or need thinking about. The latter are marked *[design-decision-needed]*, but its important to point out that straightforward change or obvious bugs just go through.


Bi-weekly community meeting
~~~~~~~~~~~~~~~~~~~~~~~~~~~

We look at a number of bugs marked with *[design-decision-needed]* every other week, currently we are doing 6 per meeting, which averages us at 5 minutes per bug. Some take longer. The goal here is to see the use case, understand what the bug is for and if it should proceed. If we are still unsure then it will get kicked "up" to the `Advisory Group http://wiki.mozilla.org/WebExtensions/AdvisoryGroup`_ for some more help and insight.

Advisory Group meeting
~~~~~~~~~~~~~~~~~~~~~

Where Mozillians with knowledge and insight beyond our group help out with the toughest bugs. Happens about once a month.

Good first bug meeting
~~~~~~~~~~~~~~~~~~~~~~

If a bug gets marked as *[good-first-bug]* then we make sure the bug has a mentor, has a decent description and make sense. We hope that contributors will use this to get into Firefox development.

If you'd like to come to some of these triages, check out the

Examples
--------

TCP and UDP Socket API
++++++++++++++++++++++

`Bug 1247628 <https://bugzilla.mozilla.org/show_bug.cgi?id=1247628>`_

* Was suggested that TCP and UDP should be seperated out and made seperate from the each other. Focusing on TCP should be the first goal.
* TCP support is useful for many add-ons and there should be many examples we could find.
* Code already exists for this in Firefox, this will be just a wrapper around the APIs.
* There were security concerns about these API and would have to be a special permission the user would have to enable (at the very least).

Verdict? Yes, but questions about the security concerns.

Implement WebSQL
++++++++++++++++

`Bug 1247329 <https://bugzilla.mozilla.org/show_bug.cgi?id=1247329>`_

* Concerns about WebSQL as not a successful standard.
* No overwhelming reason to support this.
* There are already many libraries that exist outside of WebExtensions wrap around IndexedDB and give developers access to sane APIs. Local forage is one example.
* Concerns about maintenance of such an API.

Verdict? No.

Implement an API for the location bar
+++++++++++++++++++++++++++++++++++++

`Bug 1215060 <https://bugzilla.mozilla.org/show_bug.cgi?id=1215060>`_

* Maybe we could make it an iframe they could inject.
* Should be simple to maintain.
* No real security or performance problems.

Verdict? Yes
