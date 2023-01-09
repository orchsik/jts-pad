// Factory 메서드 패턴은 객체 생성 후 수정할 수 있는 객체 생성을 위한 인터페이스를 제공한다.
// 개체를 생성하는 논리가 한 곳에서 중앙 집중화되어 코드를 단순화하고 더 잘 구성할 수 있다.

// 이 패턴은 많이 사용되며 클래스 또는 팩토리 함수(객체를 반환하는 함수)를 통해 두 가지 다른 방식으로 구현할 수도 있다.
class Alien {
  constructor(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = 'alien';
  }
  fly = () => console.log('Zzzzzziiiiiinnnnnggggg!!');
  sayPhrase = () => console.log(this.phrase);
}

const alien1 = new Alien('Ali', "I'am Ali the alien!");
console.log(alien1.name);

/**
function Alien(name, phrase) {
  this.name = name
  this.phrase = phrase
  this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"

 */
