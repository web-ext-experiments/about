.. _new:

New API Guidelines
==================

There are some basic principles around WebExtensions APIs as they currently stand. Any API that wants to get merged into Firefox would need to meet these principles.

* **Security**: the API should not expose an unacceptable risk to the end user.
* **Privacy**: similar to above.
* **Performance**: APIs should be async by default and focus on not causing jank, hangs or any sort of bad performance in Firefox.
* **Multi-process**: all APIs need to be multi-process aware.
* **Useful**: APIs that land in Firefox should be useful since all APIs have a maintenance burden.
* **High level**: WebExtensions provide a known public API layer on top of Mozilla code, allowing the underlying code to change quicker and easier.
* **Alternatives**: Do alternatives exist for example, WebAPIs?

Compared to legacy Firefox add-ons there is a significant sandbox around WebExtension APIs that is very restrictive. Access to priviledged APIs within Firefox, preferences, arbitrary File System access, socket access and so on are restricted (at the time of writing this documentation). APIs that break out of this sandbox will need very clear justification for why.

General principles
------------------

As we've been triaging bugs, we've come up with some general principles and guidelines. These are liable to change and adapt as we go along.

Users over Developers
+++++++++++++++++++++

One example was the request to prevent users from dragging `browserAction buttons into the overflow menu <https://bugzilla.mozilla.org/show_bug.cgi?id=1314070>`_, tab menu or customize menu. This bug was denied because its the users choice where they place their buttons, *not* the developers.

Users understanding UI changes
++++++++++++++++++++++++++++++

If a UI change is going to occur, it should occur on install of the extension or in a user action. This makes it clearer to the user where the change came from.

Where possible any UI that is added should have some clear trace back to the extension that installed it, maybe through icons or text.

Cleaning up on uninstall
++++++++++++++++++++++++

Firefox will do its best to clean up on uninstall, for example flipping preferences back and reverting UI changes. When we develop an API its important to think about how this would work when the extension is uninstalled. It should not be a burden developers have to carry.

Complexity and maintenance
++++++++++++++++++++++++++

For every feature we have to make an rough evaluation of the cost to implement and the benefit its hoped it will bring. But in there is also the cost of maintenance for that feature. Firefox has been around since 2004 and the maintenance burden of the code in extensions cannot be underestimated.

Anti-patterns
+++++++++++++

Here are the things that are red flags for any API:

* "We'll just make sure we manually review all extensions using this." This is a common request for APIs that have large security or privacy issues. It pushes the burden over to Mozilla and volunteers to review the extension. This is costly, time consuming and disliked by developers. With the changes to post-review by Mozilla, this is no longer an option.
* Changing the UI dynamically at runtime is normally a big concern.
* Anything that is outside the area of making Firefox interact with web pages (please see the `Vision document <https://wiki.mozilla.org/WebExtensions/Vision>`_)

Permissions
-----------

If you add in a new API, you will need to consider a permission for that API. Permissions have multiple purposes.

1. They allow quick static analyis of the extension to see what APIs they use. At Mozilla we use this to calculate API popularity and contact authors in the case of API issues.
2. They can prompt the user on install of the extension to let them know what it does. Having a permission doesn't mean it has to prompt.
3. They can be used optionally to give permission, but not all APIs should be used optionally.

Generally we prompt for a permission if it:

* Means that the extension has access to user data from web pages that isn't immediately obvious to user. For example: a content script on <all_urls> will have access to anything on any website the user visits.
* Means that the extension will reach outside of the sandbox. For example: nativeMessaging allows Firefox to talk to external programs on the users computer.
* Any other security or privacy issues that might need consideration.

An example of a permission that does not prompt is: `idle <https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/idle>`_.

APIs and the W3C
----------------

We are a member of the community. However expecting other browsers to standardise shouldn't slow down or prevent development. Any changes should eventually be brought to the community group, in the hope that other browser can support them. We'll mark all APIs appropriately on MDN to show their status for the standards track.

What have we allowed
--------------------

When a feature request comes in we try to mark it with [design-decision-needed] in Bugzilla. Not all bugs get this designation, just ones that we think we need to talk about. From that meeting we try to come out with one of the following designations:

* [design-decision-needed]: it's waiting in the queue for the meeting.
* [design-decision-deffered]: we really don't know at this point and we'll hopefully get to it later.
* [design-decision-approved]: sounds good, if someone landed a patch for this we'd accept it. The details might still need to be worked out though.
* [design-decision-denied]: we wouldn't accept this patch if you did work on it.

The point of this process is to prevent people from putting hard work into something only to have someone say no. To see all the bugs in these categories, checkout the following queries:

* `decision approved <https://bugzilla.mozilla.org/buglist.cgi?status_whiteboard=%5Bdesign-decision-approved>`_
* `decision denied <https://bugzilla.mozilla.org/buglist.cgi?status_whiteboard=%5Bdesign-decision-denied>`_

These might give you an idea of what might make it. Please note that decisions are not final and have been reversed in the past, nothing is final or perfect.

Triaging APIs
-------------

If you file a bug asking for an API it will go through the bug triage process. Since this is useful to how APIs land, here's what currently happens in bug triages:

Weekly new bug triage
+++++++++++++++++++++

We look at all new bugs in an attempt to spot serious bugs, regressions or other issues. We try to give each bug a priority. The point here is to do an initial triage and catch critical things. We also label bugs that might be good for contributors or need thinking about. The latter are marked *[design-decision-needed]*, but its important to point out that straightforward change or obvious bugs just go through.

Bi-weekly community meeting
+++++++++++++++++++++++++++

We look at a number of bugs marked with *[design-decision-needed]* every other week, currently we are doing 6 per meeting, which averages us at 5 minutes per bug. Some take longer. The goal here is to see the use case, understand what the bug is for and if it should proceed. If we are still unsure then it will get kicked "up" to the `Advisory Group <http://wiki.mozilla.org/WebExtensions/AdvisoryGroup>`_ for some more help and insight.

Good first bug meeting
++++++++++++++++++++++

If a bug gets marked as *[good-first-bug]* then we make sure the bug has a mentor, has a decent description and make sense. We hope that contributors will use this to get into Firefox development.

If you'd like to come to some of these triages, check out the calendar: https://wiki.mozilla.org/Add-ons#Meetings
