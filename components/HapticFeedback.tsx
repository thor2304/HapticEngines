import * as Haptics from "expo-haptics";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function playHaptic(feedBackStyle: Haptics.ImpactFeedbackStyle) {
    Haptics.impactAsync(feedBackStyle);
}

function getlistOfTimesBetweenHaptics(id: number) : number[] {
    const json = require('../assets/haptic.json');
    const jsonObject = json[id];
    console.log(jsonObject.timings);
    return jsonObject.timings;
}

function getListOfHapticFeedbackStyles(id: number) : Haptics.ImpactFeedbackStyle[] {
    const json = require('../assets/haptic.json');
    const jsonObject = json[id];
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