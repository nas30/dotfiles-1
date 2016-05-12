#!/bin/sh

# Load system settings.
if [ -d /etc/X11/xinit/xinitrc.d ] ; then
    for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
        [ -x "$f" ] && . "$f"
    done
    unset f
fi

# Load user settings.
if [[ -e ~/.Xresources ]]; then
    xrdb -merge ~/.Xresources
fi

# Start programs.
sxhkd &
exec bspwm
