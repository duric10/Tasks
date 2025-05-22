const source = document.getElementById("entry").innerHTML;
console.log(source);
const template = Handlebars.compile(source);
const data = {
  title: "Zadatak Handlebars",
  body: "Ovaj zadatak moram pushati na github",
  caption: "Poslije idem igrati kanter",
};

const html = template(data);
console.log(html);
document.getElementById("result").innerHTML = html;
