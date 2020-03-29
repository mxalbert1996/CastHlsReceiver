const HlsSegmentFormat = {
    UNKNOWN: 0,
    AAC: 1,
    AC3: 2,
    MP3: 3,
    TS: 4,
    TS_AAC: 5,
    E_AC3: 6,
    FMP4: 7
}

const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// intercept the LOAD request
playerManager.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, loadRequestData => {
    switch (loadRequestData.media.customData.hlsSegmentFormat) {
        case HlsSegmentFormat.AAC:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.AAC;
            break;
        case HlsSegmentFormat.AC3:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.AC3;
            break;
        case HlsSegmentFormat.MP3:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.MP3;
            break;
        case HlsSegmentFormat.TS:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.TS;
            break;
        case HlsSegmentFormat.TS_AAC:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.TS_AAC;
            break;
        case HlsSegmentFormat.E_AC3:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.E_AC3;
            break;
        case HlsSegmentFormat.FMP4:
            loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.FMP4;
            break;
    }
    return loadRequestData;
});

context.start();
