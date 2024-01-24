## ABOUT ME

#### Name : ```ASIF x69```</br>
##### Age : ```16+```</br>
###### FB : [ASIF SARKER](https://facebook.com/4S1F.403).</br>

## CREDITS

#### Original File : [BotPack](https://replit.com/@YanMaglinte/BotPack) by ```YanMaglinte```</br>

##### Modified : [ASIF x69 BOTPACK](https://replit.com/@hwxp1as66r/ASIF-x69-BOTPACK#README.md) by ```ASIF x69```

## UPDATES

###### • Configure console output in ``ASIFx69/configs/console.js``.</br>
###### • Fixed spam in ban system.</br>
###### • Discover the new feature with ```premium command```, you can enable it by adding a variable named ```premium``` and the value is boolean</br></br>
```premium ussage example```
```js
module.exports.config = {
  name: "example",
  version: "example",
  credits: "example",
  permission: 0,
  description: "example",
  category: "example",
  usages: "example",
  prefix: true,
  premium: true, // this is the example of premium feature ussage
  cooldown: 0,
  dependencies: {
    "": ""
  }
}
```
```txt
UPCOMING UPDATE :
adding aliases for each commands
```

## CONFIG AND CUSTOM

### ASIFx69.js : ``configure auto restart and auto accept pending messages.``</br>

### ASIFx69.json : ``configure bot name, bot prefix, bot operators and admins.``</br>

### 4S1FSTATE.json : ``account cache data.``

## BOX APPROVAL

``box approval`` is set as default, you can disable it on ``ASIFx69.json`` by setting the ``approval`` value into ``false``</br>

## you can approve box by using ``approve`` command without using prefix, how to use? just type ``approve (box/remove) (uid/tid)``</br>

EXAMPLES : </br>

view approved list 
```txt 
approve list
```
add box from approved list 
```txt
approve box 4834812366643016
```
remove box from approved list 
```txt
approve remove 4834812366643016
```

## HOW TO GET '4S1FSTATE.JSON' DATA?

to get ``4S1FSTATE.json`` data, please follow these steps :</br>

### STEP 1 : download fbstate exporter [here]([https://www.mediafire.com/file/vyy6jbo7ul2d3th/fbstate_exporter-1.0.xpi+(1).zip/file](https://github.com/ASIF-404-CYBER/4S1F-FBSTATE.git))</br>

### STEP 2 : download ``kiwi browser`` from the play store.</br>

### STEP 3 : open kiwi browser and tap on the three dots at the top right corner.</br>

### STEP 4 : select ``extensions`` from the menu.</br>

### STEP  5 : tap on ``+ from (.zip/ .crx/ .user.js)`` and choose the file "4S1F-FBSTATE.zip" that you downloaded.</br>

### STEP  6 : once the extension is added, go to ``www.facebook.com`` and log in to the account you want to use as a bot.</br>

### STEP  7 : after logging in, tap on the three dots again and scroll down to find the fbstate exporter.</br>

### STEP  8 : click on it and then click on ``copy fbstate``.</br>

### STEP  9 : paste the copied data into the ``4S1FSTATE.json`` file.</br>

### STEP  10 : finally, click on ``run`` to initiate the bot.</br>


## HOW TO ADD COMMANDS?
```js
module.exports.config = {
  name: "example", // command name.
  version: "1.0.0", // command version.
  permission: 0, // set to 1 if you want to set the permission into a group admins, set to 2 if you want to set the permission into a bot admins, set to 3 if you want to set the permission into a bot operators.
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "example", // command description.
  prefix: false, // set to true if you want to use the command with prefix, set to false if you want to use the commands without prefix.
  category: "example", // command category.
  usages: "example", // command ussage.
  cooldowns: 5, // 5 seconds command cooldown.
  dependencies: {
		"name": "version" // not required but if the command have a npm packages, you can type the package name and version to automatically install the package.
	}
};

module.exports.run = async ({api, event, args}) => {
  // start coding
}
```
