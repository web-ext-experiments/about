.. _new:

New API Guidelines
==================

There are some basic principles around WebExtensions APIs as they currently stand. Any API that wants to get merged into Firefox would need to meet these principles.

* Security: the API should not expose an unacceptable risk to the end user.
* Privacy: similar to above.
* Performance: APIs should be async by default and focus on not causing jank, hangs or any sort of bad performance in Firefox.
* Multi-process: all APIs need to be mult-process aware.
* Useful: APIs that land in Firefox should be useful since all APIs have a maintenance burden. 
* High level: WebExtensions provide a known public API layer on top of Mozilla code, allowing the underlying code to change quicker and easier.
* Alternatives: Do alternatives exist for example, WebAPIs?

Compared to legacy Firefox add-ons there is a significant sandbox around WebExtension APIs that is very restrictive. Access to priviledged APIs within Firefox, preferences, arbitrary File System access, socket access and so on are restricted (at the time of writing this documentation). APIs that break out of this sandbox will need very clear justification for why.

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
