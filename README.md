Name of the first screenshot -> Screenshot_20220920-192216_Zoom.jpg
Name of the second screenshot -> Screenshot_20220920-192240_Zoom.jpg
Name of the last screenshot -> Screenshot_20220920-193752_Zoom.jpg
Length of the audio clip -> 00:15:52

Time of the last screenshot == End time of the audio clip
Modified time of the first screenshot according to the audio clip = 193752-001552 = 192200

The first screenshot renamed as background an set as the background

***************************************************************************************************************

Name of the first screenshot -> Screenshot_20220920-202116_Zoom.jpg
Name of the second screenshot -> Screenshot_20220920-202238_Zoom.jpg
Name of the last screenshot -> Screenshot_20220920-220515_Zoom.jpg
Length of the audio clip -> 01:44:12

Time of the last screenshot == End time of the audio clip
Modified time of the first screenshot according to the audio clip = last screenshot time - audio clip length = 220515-014412 = 202103 <- Start time of the audio clip

STEPS
-----

1) Set the first screenshot as the background >>> style.css >>> line 12
2) Set the audio clip >>> script.js >>> line 01
3) Set screenshot date >>> script.js >>> line 61 & line 102
4) Set a time between the first screenshot and the second screenshot >>> script.js >>> line 30-32
5) Set the same time as line 30-32 but 1 second less >>> script.js >>> line line 74-76
6) Time of step 4 - start time of audio clip = 202120-202103 = 17
7) Set few seconds more than the last screenshot time >>> script.js >>> line 67
8) Run the web app
9) Press Enter to start audio
10) After complete seconds got in step 6 (i.e. 17 seconds) press spacebar