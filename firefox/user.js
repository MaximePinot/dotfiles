/**
 * Go to about:profiles to know where to place this file.
 * 
 * Thanks to https://github.com/arkenfox/user.js
 */

//  Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// Disable sponsored content on Firefox Home (Activity Stream)
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// Use Mozilla geolocation service instead of Google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// Enable logging to the console
// user_pref("geo.provider.network.logging.enabled", true);

// Disable using the OS's geolocation service
user_pref("geo.provider.ms-windows-location", false); // Windozs
user_pref("geo.provider.use_corelocation", false); // Mac
user_pref("geo.provider.use_gpsd", false); // Linux
user_pref("geo.provider.use_geoclue", false); // Linux

// Disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false);

// Disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable personalized Extension Recommendations in about:addons and AMO
user_pref("browser.discovery.enabled", false);

// Disable shopping experience
user_pref("browser.shopping.experience2023.enabled", false);

// Disable new data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// Disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");

// Disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Disable Studies
user_pref("app.shield.optoutstudies.enabled", false);

// Disable Normandy/Shield
// Shield is a telemetry system that can push and test "recipes"
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Enforce no submission of backlogged Crash Reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// Disable Network Connectivity checks
user_pref("network.connectivity-service.enabled", false);

// Disable link prefetching
user_pref("network.prefetch-next", false);

// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// Disable predictor / prefetching
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);

// Disable mousedown speculative connections on bookmarks and history
user_pref("browser.places.speculativeConnect.enabled", false);

// Enforce no "Hyperlink Auditing" (click tracking)
// https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/
user_pref("browser.send_pings", false);

// Disable location bar making speculative connections
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Disable search and form history
user_pref("browser.formfill.enable", false);

// Disable Safe Browsing (SB) checks for downloads (both local lookups + remote)
user_pref("browser.safebrowsing.downloads.enabled", false);

// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", ""); // Defense-in-depth

// Disable SB checks for unwanted software
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// Disable auto-filling username & password form fields
// It can leak in cross-site forms *and* be spoofed
// NOTE: Username & password are still available when you enter the field
user_pref("signon.autofillForms", false);

// Disable formless login capture for Password Manager
user_pref("signon.formlessCapture.enabled", false);

/* Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
 * hardens against potential credentials phishing
 * 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
 * 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
 * 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)
 */
user_pref("network.auth.subresource-http-auth-allow", 1);

// Always ask where to download
user_pref("browser.download.useDownloadDir", false);

// Disable downloads panel opening on every download
user_pref("browser.download.alwaysOpenPanel", false);

// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);\

// Always ask how to handle new mimetypes
user_pref("browser.download.always_ask_before_handling_new_types", true);

// Referer - Control the amount of cross-origin information to send
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// https://make-firefox-private-again.com/
user_pref("dom.private-attribution.submission.enabled", false);
