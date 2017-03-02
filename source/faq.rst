.. _faq:


FAQ
===

WebExtensions Experiements have many similarities to traditional add-ons,
therefore a lot of general documentation is already available on
`developer.mozilla.org <https://developer.mozilla.org>`_. The following
questions and answers are specific to WebExtensions experiments and should help
you with common issues.


How do I get an URI reference to the files in my experiment?
------------------------------------------------------------
You may need an URI referencing files within your extension, for example to
load a frame script when your API methods are being triggered. If you have a
file named ``browserScript.js`` in the root of your add-on, you can reference it
using the URI ``resource://extension-NAMESPACE-api/browserScript.js``, where
``NAMESPACE`` is the namespace defined in your ``schema.json`` file.

Can I include a chrome.manifest in an experiment?
-------------------------------------------------

The experiments do not support the 'chrome.manifest', and it will be ignored if
included in the experiments add-on source directory. If you need an URI which
points to assets packaged within the experiment (e.g. an image, an additional
.jsm file, a frame script, etc.), please read the `question about URI
references <How do I get an URI reference to the files in my experiment?_>`_.



If you have any more questions you can't find an answer to please `get in touch <https://wiki.mozilla.org/Add-ons#Getting_in_touch>`_.
