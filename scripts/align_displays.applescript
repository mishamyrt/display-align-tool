set toolUrl to "https://mishamyrt.github.io/display-align-tool/"
set topUrl to toolUrl & "?width=64&count=13"

tell application "Safari" to activate
tell application "System Events"
	tell process "Safari"
		set topWindow to window 1
		set position of topWindow to {0, 0}
		delay 0.5
		click menu item "New Window" of menu "File" of menu bar 1
		delay 0.5
		set bottomWindow to window 2
		set position of bottomWindow to {0, -1500}
		delay 0.5
		perform action "AXPress" of button 2 of topWindow
		delay 1
		perform action "AXRaise" of window 2
		delay 1
		perform action "AXPress" of button 2 of bottomWindow
	end tell
end tell
tell application "Safari"
	tell window 1 to set properties of current tab to {URL:topUrl}
	tell window 2 to set properties of current tab to {URL:toolUrl}
end tell
delay 0.5
tell application "System Events"
    key code 53
end tell