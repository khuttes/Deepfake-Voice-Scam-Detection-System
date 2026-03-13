document.addEventListener('DOMContentLoaded', () => {
    const audioUpload = document.getElementById('audioUpload');
    const fileNameSpan = document.getElementById('fileName');
    const analyzeButton = document.getElementById('analyzeButton');
    const resultsSection = document.querySelector('.results-section');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const analysisResults = document.getElementById('analysisResults');

    let selectedFile = null;

    audioUpload.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            selectedFile = event.target.files[0];
            fileNameSpan.textContent = selectedFile.name;
            analyzeButton.disabled = false;
        } else {
            selectedFile = null;
            fileNameSpan.textContent = 'No file chosen';
            analyzeButton.disabled = true;
        }
    });

    analyzeButton.addEventListener('click', () => {
        if (selectedFile) {
            // Hide previous results and show loading indicator
            resultsSection.style.display = 'block';
            analysisResults.style.display = 'none';
            loadingIndicator.style.display = 'block';
            analyzeButton.disabled = true; // Disable button during analysis

            console.log('Analyzing file:', selectedFile.name);

            // Simulate API call and analysis
            setTimeout(() => {
                loadingIndicator.style.display = 'none';
                displayResults({
                    voiceAuthenticityScore: '92% Authentic',
                    voiceAuthenticityDetails: 'Minor spectral inconsistencies detected, but overall human-like vocal characteristics.',
                    scamPatternScore: '75% Scam Risk',
                    scamPatternDetails: 'Keywords like "urgent transfer" and "account locked" identified. Elevated emotional tone detected.',
                    overallConfidenceScore: 'High Risk (85%)',
                    overallConfidenceMessage: 'This audio likely contains manipulated voice elements and exhibits strong scam indicators. Proceed with extreme caution.',
                    recommendations: [
                        'Do not share personal financial information.',
                        'Verify the caller's identity through an independent, trusted source.',
                        'Hang up immediately if you feel pressured or suspicious.'
                    ]
                });
                analysisResults.style.display = 'block';
                analyzeButton.disabled = false; // Re-enable button after analysis
            }, 3000); // Simulate 3 seconds analysis time
        }
    });

    function displayResults(data) {
        document.getElementById('voiceAuthenticityScore').textContent = data.voiceAuthenticityScore;
        document.getElementById('voiceAuthenticityDetails').textContent = data.voiceAuthenticityDetails;
        document.getElementById('scamPatternScore').textContent = data.scamPatternScore;
        document.getElementById('scamPatternDetails').textContent = data.scamPatternDetails;
        document.getElementById('overallConfidenceScore').textContent = data.overallConfidenceScore;
        document.getElementById('overallConfidenceMessage').textContent = data.overallConfidenceMessage;

        const recommendationList = document.getElementById('recommendationList');
        recommendationList.innerHTML = ''; // Clear previous recommendations
        data.recommendations.forEach(rec => {
            const li = document.createElement('li');
            li.textContent = rec;
            recommendationList.appendChild(li);
        });
    }
});
