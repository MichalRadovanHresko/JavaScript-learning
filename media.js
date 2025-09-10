const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function calculateMean (views) {
    let sum = 0;
    for (let i = 0; i < views.length; i++) {
        sum += views[i];
    }
    let mean = sum / views.length;
    console.log(mean);
}
function calculateMedian (views) {
    let sorted = views.slice().sort((a, b) => a - b);
    let length = sorted.length;
    let middle = Math.floor(length / 2);
    let median;
    
    if (length % 2 === 0) {
        median = (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
        median = sorted[middle];
    }
    console.log(median);
}
calculateMean(recentTikTokViews);
calculateMean(recentInstagramViews);
calculateMean(recentYouTubeViews);
calculateMedian(recentInstagramViews);
calculateMedian(recentTikTokViews);
calculateMedian(recentYouTubeViews);