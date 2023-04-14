# CWC-Select-element

Custom Web Control made for WinCC Unified

### 1. CONTENT

HTML select element

### 2. INTERFACE

  - **rows** : List of elemnent to show in the drop down list (i.e. "[["element1"],["element2"],["element3"]]")

  - **current** : Element shown by default once the obcject is loaded (i.e. "element2") !! This will not trigger any events !!

  - **fontSize** : Size of the font for the element
### 3. EVENTS

  - **ev_selectElement** : This event is triggered every time the user change the selected item, as a result in the "rowId" you will find the selected item
