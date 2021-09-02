# KwinCompizGrid
This tries to emulate the Grid plugin from compiz 0.8.x
It uses the Super / Meta key + numpad to tile windows. Repeating the combo on the same window, changes the grid type

![](/docs/preview2.gif)
![](/docs/preview.gif)

# Installation

```bash
$ git clone git@github.com:LucaMoschella/UltrawideWindows.git
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -i .
$ kwin_x11 --replace &
```

# Usage
Set the desired shortcuts under `System Settings > Shortcuts > Global Shortcuts > KWin`.

My suggestion is to use the following configuration:

| Shortcuts                            | Commands in 3x2 grid                                     |
| ------------------------------------ | -------------------------------------------------------- |
| <kbd>Meta</kbd> + <kbd>Numpad7</kbd> | <kbd>Ultrawide: Move Window to up-left</kbd>       |
| <kbd>Meta</kbd> + <kbd>Numpad8</kbd> | <kbd>Ultrawide: Move Window to up-center</kbd>     |
| <kbd>Meta</kbd> + <kbd>Numpad9</kbd> | <kbd>Ultrawide: Move Window to up-right</kbd>      |
| <kbd>Meta</kbd> + <kbd>Numpad1</kbd> | <kbd>Ultrawide: Move Window to down-left</kbd>     |
| <kbd>Meta</kbd> + <kbd>Numpad2</kbd> | <kbd>Ultrawide: Move Window to down-center</kbd>   |
| <kbd>Meta</kbd> + <kbd>Numpad3</kbd> | <kbd>Ultrawide: Move Window to down-right</kbd>    |
| <kbd>Meta</kbd> + <kbd>Numpad4</kbd> | <kbd>Ultrawide: Move Window to left-height</kbd>   |
| <kbd>Meta</kbd> + <kbd>Numpad5</kbd> | <kbd>Ultrawide: Move Window to center-height</kbd> |
| <kbd>Meta</kbd> + <kbd>Numpad6</kbd> | <kbd>Ultrawide: Move Window to right-height</kbd>  |


# Update


```bash
$ cd UltrawideWindows
$ ./scripts/update.sh
```

# Remove

```bash
$ cd UltrawideWindows
$ plasmapkg2 --type=kwinscript -r .
```
