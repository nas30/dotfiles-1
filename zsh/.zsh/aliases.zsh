# Package shortcuts
alias pacinstall='pacaur --noedit -S'
alias pacsearch='pacaur -Ss'
alias pacsync='pacaur -Sy'
alias pacupdate='pacaur --noedit --noconfirm -Syu'
alias paccheck='checkupdates && pacaur -k'
alias pacremove='pacaur -Rs'
alias pacclean='sudo pacman -Rns $(pacman -Qtdq)'

# Increase the size of /tmp directory for larger builds
alias increasetmp='sudo mount -o remount,size=4G,noatime /tmp'

# Dotfile storage shortcuts
alias stowinstallhome='stow -d ~/dotfiles -t ~'
alias stowinstallroot='sudo stow -d ~/dotfiles -t /'
alias stowuninstall='stow -D'

# Quick media access
alias studygrind='mpv --no-video --shuffle "https://soundcloud.com/thissiteisokay/sets/study-grind"'
# alias porn='mpv "http://www.pornhub.com/random"'

alias cls='clear'

alias ls='ls -l --color=auto'
alias la='ls -l --all --color=auto'

# make all file modifications verbose
alias rm='rm -iv'
alias cp='cp -iv'
alias mv='mv -iv'

# prevents accidentally clobbering files
alias mkdir='mkdir -p'

alias mk='touch'
alias rmdir='rm -rf'

# print path files
alias path='echo -e ${PATH//:/\\n}'

# show terminal color scheme
alias colors='bash ~/bin/colorscript/pokemon'
