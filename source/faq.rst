.. _faq:


FAQ
===

WebExtensions Experiements have many similarities to traditional add-ons,
therefore a lot of general documentation is already available on
`developer.mozilla.org <https://developer.mozilla.org>`_. The following
questions and answers are specific to WebExtensions experiments and should help
you with common issues.


Can I include a chrome.manifest in an experiment?
-------------------------------------------------

The experiments do not support the 'chrome.manifest', and it will be ignored if
included in the experiments add-on source directory. If you need an URI which
points to assets packaged within the experiment (e.g. an image, an additional
.jsm file, a frame script, etc.), you can register a path with the
``resource:`` protocol handler.


Why is my experiment ``undefined`` on Beta and Release?
-------------------------------------------------------

On Nightly and Dev Edition, you can install unsigned experiments if you flip two preferences: ``xpinstall.signatures.required`` and ``extensions.legacy.enabled``.
However unsigned experiments cannot be installed on Beta or Release regardless of any preference settings.


If you have any more questions you can't find an answer to please `get in touch <https://wiki.mozilla.org/Add-ons#Getting_in_touch>`_.
