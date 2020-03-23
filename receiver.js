const MediaType = {
    UNKNOWN: 0,
    AUDIO: 1,
    VIDEO: 2
}

const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// intercept the LOAD request
playerManager.setMessageInterceptor(cast.framework.messages.MessageType.LOAD, loadRequestData => {
    if (loadRequestData.media.customData.hasOwnProperty("mediaType")) {
        switch (loadRequestData.media.customData.mediaType) {
            case MediaType.AUDIO:
                loadRequestData.media.mediaCategory = cast.framework.messages.MediaCategory.AUDIO;
                loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.AAC;
                break;
            case MediaType.VIDEO:
                loadRequestData.media.mediaCategory = cast.framework.messages.MediaCategory.VIDEO;
                loadRequestData.media.hlsSegmentFormat = cast.framework.messages.HlsSegmentFormat.TS;
                break;
        }
    }
    return loadRequestData;
});

context.start();
