import * as Haptics from "expo-haptics";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function playHaptic(feedBackStyle: Haptics.ImpactFeedbackStyle) {
    Haptics.impactAsync(feedBackStyle);
}

// Return the json object with the id
function getJsonObject(id: number) {
    const json = require('../assets/haptic.json');
    for (const jsonObject of json) {
        if (jsonObject.id === id) {
            return jsonObject;
        }
    }
}

function getlistOfTimesBetweenHaptics(id: number) : number[] {
    const jsonObject = getJsonObject(id)
    return jsonObject.timings;
}

function getListOfHapticFeedbackStyles(id: number) : Haptics.ImpactFeedbackStyle[] {
    const jsonObject = getJsonObject(id)
    return jsonObject.types;
}

export function playHapticFeedbackMultipleTimes(id: number) {
    const hapticTimings = getlistOfTimesBetweenHaptics(id);
    const hapticFeedbackStyles = getListOfHapticFeedbackStyles(id);

    (async () => {
        for (let i = 0; i < hapticTimings.length; i++) {
            await delay(hapticTimings[i]);
            playHaptic(hapticFeedbackStyles[i]);
        }
    })();
}