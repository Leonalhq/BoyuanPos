 // ==UserScript==
// @name              伯远正能量_测试版
// @namespace         https://github.com/inu1255/soulsign-chrome
// @version           1.0.4
// @author            Leona kun
// @loginURL          https://weibo.com
// @expire            900e3
// @domain            weibo.com
// @domain            cms.metazion.fun
// @param             times 次数
// ==/UserScript==

/**
@param {string} times - 次数
*/

// 【本地超话列表】
// hid 超话ID
// hname 超话名称
// text 帖子内容
// picture 帖子附图

 
var emojis = ['😄','😀','😊','😉','😍','😘','😚','😗','😙','😜','😝','😛','😳','😁','😔','😌','😒','😞','😣','😢','😂','😭','😪','😥','😰','😅','😓','😩','😫','😨','😱','😠','😡','😤','😖','😆','😋','😷','😎','😴','😵','😲','😟','😦','😧','😈','👿','😮','😬','😐','😕','😯','😶','😇','😏','😑','👲','👳','👮','👷','💂','👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','👅','👄','👍','👎','👌','👊','✊','✌','👋','✋','👐','👆','👇','👉','👈','🙌','🙏','☝','👏','💪','🚶','🏃','💃','👫','👪','👬','👭','💏','💑','👯','🙆','🙅','💁','🙋','💆','💇','💅','👰','🙎','🙍','🙇','🎩','👑','👒','👟','👞','👡','👠','👢','👕','👔','👚','👗','🎽','👖','👘','👙','💼','👜','👝','👛','👓','🎀','🌂','💄','💛','💙','💜','💚','❤','💔','💗','💓','💕','💖','💞','💘','💌','💋','💍','💎','👤','👥','💬','👣','💭','🐶','🐺','🐱','🐭','🐹','🐰','🐸','🐯','🐨','🐻','🐷','🐽','🐮','🐗','🐵','🐒','🐴','🐑','🐘','🐼','🐧','🐦','🐤','🐥','🐣','🐔','🐍','🐢','🐛','🐝','🐜','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅','☁','⚡','☔','❄','⛄','🌀','🌁','🌈','🌊','🎍','💝','🎎','🎒','🎓','🎏','🎆','🎇','🎐','🎑','🎃','👻','🎅','🎄','🎁','🎋','🎉','🎊','🎈','🎌','🔮','🎥','📷','📹','📼','💿','📀','💽','💾','💻','📱','☎','📞','📟','📠','📡','📺','📻','🔊','🔉','🔈','🔇','🔔','🔕','📢','📣','⏳','⌛','⏰','⌚','🔓','🔒','🔏','🔐','🔑','🔎','💡','🔦','🔆','🔅','🔌','🔋','🔍','🛁','🛀','🚿','🚽','🔧','🔩','🔨','🚪','🚬','💣','🔫','🔪','💊','💉','💰','💴','💵','💷','💶','💳','💸','📲','📧','📥','📤','✉','📩','📨','📯','📫','📪','📬','📭','📮','📦','📝','📄','📃','📑','📊','📈','📉','📜','📋','📅','📆','📇','📁','📂','✂','📌','📎','✒','✏','📏','📐','📕','📗','📘','📙','📓','📔','📒','📚','📖','🔖','📛','🔬','🔭','📰','🎨','🎬','🎤','🎧','🎼','🎵','🎶','🎹','🎻','🎺','🎷','🎸','👾','🎮','🃏','🎴','🀄','🎲','🎯','🏈','🏀','⚽','⚾','🎾','🎱','🏉','🎳','⛳','🚵','🚴','🏁','🏇','🏆','🎿','🏂','🏊','🏄','🎣','☕','🍵','🍶','🍼','🍺','🍻','🍸','🍹','🍷','🍴','🍕','🍔','🍟','🍗','🍖','🍝','🍛','🍤','🍱','🍣','🍥','🍙','🍘','🍚','🍜','🍲','🍢','🍡','🍳','🍞','🍩','🍮','🍦','🍨','🍧','🎂','🍰','🍪','🍫','🍬','🍭','🍯','🍎','🍏','🍊','🍋','🍒','🍇','🍉','🍓','🍑','🍈','🍌','🍐','🍍','🍠','🍆','🍅','🌽','🏠','🏡','🏫','🏢','🏣','🏥','🏦','🏪','🏩','🏨','💒','⛪','🏬','🏤','🌇','🌆','🏯','🏰','⛺','🏭','🗼','🗾','🗻','🌄','🌅','🌃','🗽','🌉','🎠','🎡','⛲','🎢','🚢','⛵','🚤','🚣','⚓','🚀','✈','💺','🚁','🚂','🚊','🚉','🚞','🚆','🚄','🚅','🚈','🚇','🚝','🚋','🚃','🚎','🚌','🚍','🚙','🚘','🚗','🚕','🚖','🚛','🚚','🚨','🚓','🚔','🚒','🚑','🚐','🚲','🚡','🚟','🚠','🚜','💈','🚏','🎫','🚦','🚥','⚠','🚧','🔰','⛽','🏮','🎰','♨','🗿','🎪','🎭','📍','🚩','⬆','⬇','⬅','➡','🔠','🔡','🔤','↗','↖','↘','↙','↔','↕','🔄','◀','▶','🔼','🔽','↩','↪','ℹ','⏪','⏩','⏫','⏬','⤵','⤴','🆗','🔀','🔁','🔂','🆕','🆙','🆒','🆓','🆖','📶','🎦','🈁','🈯','🈳','🈵','🈴','🈲','🉐','🈹','🈺','🈶','🈚','🚻','🚹','🚺','🚼','🚾','🚰','🚮','🅿','♿','🚭','🈷','🈸','🈂','Ⓜ','🛂','🛄','🛅','🛃','🉑','㊙','㊗','🆑','🆘','🆔','🚫','🔞','📵','🚯','🚱','🚳','🚷','🚸','⛔','✳','❇','❎','✅','✴','💟','🆚','📳','📴','🅰','🅱','🆎','🅾','💠','➿','♻','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','⛎','🔯','🏧','💹','💲','💱','©','®','™','〽','〰','🔝','🔚','🔙','🔛','🔜','❌','⭕','❗','❓','❕','❔','🔃','🕛','🕧','🕐','🕜','🕑','🕝','🕒','🕞','🕓','🕟','🕔','🕠','🕕','🕖','🕗','🕘','🕙','🕚','🕡','🕢','🕣','🕤','🕥','🕦','✖','➕','➖','➗','♠','♥','♣','♦','💮','💯','✔','☑','🔘','🔗','➰','🔱','🔲','🔳','◼','◻','◾','◽','▪','▫','🔺','⬜','⬛','⚫','⚪','🔴','🔵','🔻','🔶','🔷','🔸','🔹']
var pics =  ['002jiQKGly1gnzvvtfi7gj60j60nz0td02','002jiQKGly1gnzvvtfsbfj60j60nz0tj02','002jiQKGly1gnzvvth29aj60j60nz75a02','0072KUQXly1ghh1d0daf7j30jg163t9r',"006wv27Uly1gr0n60itkhj31o01o0hdt","5ed752a6gy1gr3ns9zy4lj20j60j6dif"]

let chaohuas = [
    {
        "hid": "100808c58cd9e27740c6aae77baa96d6538cab",
        "hname": "伯远fly",
        "text": "",
        "picture": ""
      },
  ];
  
  // 当前时间戳
  const timestamp = new Date().getTime();
  
  // 用户ID
  let sid = '0';
  
  function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
  
  function objectToUrlEncodedParams(obj) {
    return Object.entries(obj)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }
  
  async function fetchData() {
    const url = `https://cms.metazion.fun/weibo-chaohua-posts`;
    const rsp = await axios.get(url);
  
    if (rsp.status != 200) {
      return {
        success: false,
        msg: `拉取数据: ${rsp.status}-操作失败`
      };
    }
  
    chaohuas = rsp.data;
  
    return {
      success: true,
      msg: `拉取数据: 操作成功`,
    };
  }
  
  async function goHome() {
    const url = `https://weibo.com`;
    const rsp = await axios.get(url);
  
    if (rsp.status != 200) {
      return {
        success: false,
        msg: `进入主页: ${rsp.status}-操作失败`
      };
    }
  
    const jstring = JSON.stringify(rsp.data);
  
    const result = /CONFIG\['uid'\]='(\d*?)'/.exec(jstring);
    if (result == null || result.length < 2) {
      return {
        success: false,
        msg: `用户ID: 获取失败`
      };
    }
  
    sid = result[1];
    return {
      success: true,
      msg: `用户ID: ${sid}`
    };
  }
    //正能量
  async function getPos() {

    // let response = await fetch("https://data.zhai78.com/openOneGood.php")
    //新的语录api
    let response = await fetch("https://api.66mz8.com/api/quotation.php?format=json")
    let data = await response.json()
    return data
  }
  
   function getEmo(){
    return  emojis[Math.floor(Math.random() * emojis.length)];
   }

     
   function getPictures(){
    return  pics[Math.floor(Math.random() * pics.length)];
   }

   function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
  
  
  
  async function doPost(hid, hname, text, picture) {
    const url = `https://weibo.com/p/aj/proxy?ajwvr=6&__rnd=${timestamp}`;
  
    const rsp = await axios({
      url: url,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://weibo.com',
        'Referer': `https://weibo.com/p/${hid}/super_index`
      },
      data: {
        'id': hid,
        'domain': '100808',
        'module': 'share_topic',
        'title': '%E5%8F%91%E5%B8%96',
        'content': '',
        'api_url': 'http://i.huati.weibo.com/pcpage/super/publisher',
        'spr': '',
        'extraurl': '',
        'is_stock': '',
        'check_url': `http%3A%2F%2Fi.huati.weibo.com%2Faj%2Fsuperpublishauth%26pageid%3D${hid}%26uid%3D1764819037`,
        'location': 'page_100808_super_index',
        'text': text,
        'appkey': '',
        'style_type': 1,
        'pic_id': picture,
        'tid': '',
        'pdetail': hid,
        'mid': '',
        'isReEdit': 'false',
        'sync_wb': 1,
        'pub_source': 'page_2',
        'api': `http://i.huati.weibo.com/pcpage/operation/publisher/sendcontent?sign=super&page_id=${hid}`,
        'longtext': 1,
        'topic_id': `1022:${hid}`,
        'pub_type': 'dialog',
        '_t': 0
      },
      transformRequest: [function (data) {
        return objectToUrlEncodedParams(data);
      }]
    });
  
    if (rsp.status != 200) {
      return {
        success: false,
        msg: `超话发帖[${hname}]: ${rsp.status}-操作失败`
      };
    }
  
    return {
      success: rsp.data.code == '100000',
      msg: `超话发帖[${hname}]: ${rsp.data.code}-${rsp.data.msg}`
    };
  }
  
  exports.run = async function(param) {
    let result = {};
  
    // 从云端拉取超话列表，如使用本地数据，请在上面配置【本地超话列表】并注释掉下面4行
    // result = await fetchData();
    // if (!result.success) {
    //   throw result.msg;
    // }
  
    // 进入用户主页
    result = await goHome();
    if (!result.success) {
      throw result.msg;
    }
  
    // 执行超话批量发帖
    let count = 0;
    for (let i = 0; i < param.times; i++){
        for (const chaohua of chaohuas) {

        //正能量语录
        pos = await getPos();
        if (pos['code'] !== 200) {
            throw pos.msg;
        }
        

        const hid = chaohua['hid'];
        const hname = chaohua['hname'];
        const header = "#爱豆v力量#" +getEmo()+ " #爱豆能量月#\n\n";
        //   let x = header + pos['txt'] + "\n" + getEmo() + "\n"+ "\n伯远@INTO1-伯远\n"+Math.random()*100;
        //为了凑字数倒过来
        let x = header + pos['quotation']+pos['quotation'].split("").reverse().join("") + "\n" + getEmo()+getEmo()+ "\n伯远@INTO1-伯远\n"+Math.random()*100;
        const text = x.replace(/\\r\\n/g, '\r\n')
        const picture = getPictures()
    
        let result = await doPost(hid, hname, text, picture);
        if (!result.success) {
            throw result.msg;
        }
    
        ++count;
        }
        let waittimer = getRandom(2111, 5211);
        await sleep(waittimer);
    }
  
    return `操作成功: 完成数量[${count}]`;
  };
  
  exports.check = async function(param) {
    return true;
  };
  