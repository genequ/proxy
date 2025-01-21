function FindProxyForURL(url, host) {
    var homeNetwork = /^192\.168\.31\./;
    var myIP = myIpAddress();

    if (homeNetwork.test(myIP)) {
        return "DIRECT";
    }

    var companyProxy = "PROXY eglbeprx001.esko-graphics.com:8080";

    var proxySites = [
        "google.com",
        "youtube.com",
        "twitter.com",
        "openai.com",
        "chatgpt.com",
        "github.com",
        "x.com"
    ];

    for (var i = 0; i < proxySites.length; i++) {
        if (dnsDomainIs(host, proxySites[i]) || shExpMatch(host, "*." + proxySites[i])) {
            return companyProxy;
        }
    }
    return "DIRECT";
}
