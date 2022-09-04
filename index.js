$(document).ready(() => {
  var menu = [
    {
      id: 1,
      name: "ผัดกะเพรา",
      price: 32,
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80",
    },
    {
      id: 2,
      name: "ไข่ดาว",
      price: 12,
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 3,
      name: "หมูกรอบ",
      price: 52,
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80",
    },
    {
      id: 4,
      name: "คะน้า",
      price: 45,
      img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
    },
    {
      id: 5,
      name: "พริกชี้ฟ้า",
      price: 71,
      img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 6,
      name: "น้ำตกหมู",
      price: 19,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  console.log("menu :", menu);

  var html = "";
  for (let i = 0; i < menu.length; i++) {
    html += `
        <div onclick="selectproduct(${menu[i].id}, '${menu[i].name}', ${menu[i].price} )" class="product-items">
            <img src="${menu[i].img}" alt="">
            <div class="product-info">
                <h3>${menu[i].name}</h3>
                <p>${menu[i].price} THB</p>
            </div>
        </div>
        `;
  }
  $("#productbox").html(html);
});

var list = [];
const selectproduct = (mid, mname, mprice) => {
  console.log("list :", list);
  console.log("selectproduct :", mid, mname, mprice);
  var pass = true;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === mid) {
      list[i].count++;
      pass = false;
    }
  }

  if (pass) {
    list.push({
      id: mid,
      name: mname,
      price: mprice,
      count: 1,
    });
  }

  var html = "";
  var sumprice = 0;
  for (let i = 0; i < list.length; i++) {
    sumprice += Number(list[i].price) * Number(list[i].count);
    html += `
        <div class="list-items">
            <p>[x${list[i].count}] ${list[i].name}</p>
            <p>${numberWithCommas(list[i].price * list[i].count)} THB</p>
        </div>
        `;
  }

  html += `
    <div class="list-items list-summary">
        <p>รวมราคา</p>
        <p>${numberWithCommas(sumprice)} THB</p>
    </div>
    `;
  $("#listbox").html(html);
};

const numberWithCommas = (x) => {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
};

const clearList = () => {
  list = [];
  $("#listbox").html(`<p>โปรดเลือกรายการ</p>`);
};

const printList = () => {
  console.log("FN printlist list :", list);
  var gotolist = JSON.stringify(list);
  console.log("FN printlist gotolist :", gotolist);
  localStorage.setItem("menulist", gotolist);
  window.location.href = "slip.html";
};
