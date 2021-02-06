"use strict";

var _this = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Дорогой программист! Если ты читаешь это то знай что автор данного творения не был под наркотой когда писал "ЭТО"
// Он просто новичок желающий попрактиковаться
// Если ты не сможешь разобраться в данном коде то я могу тебя утешить, я сам не до конца понимаю что САМ ЖЕ написал
window.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.btn__link'),
      gameOver = document.querySelector('.gameOver'),
      reload_btn = document.querySelector('.reload-btn'),
      help__close__item = document.querySelector('[data-close]'),
      help = document.querySelector('.help'),
      chooseCharacter = document.querySelector('.chooseCharacter'),
      chooseCharacter__elements = chooseCharacter.querySelectorAll('a'),
      container__title = document.querySelector('.container-title'),
      gameOver__loose = document.querySelector('.gameOver__loose'),
      mainContent = document.querySelector('.mainContent'),
      charactersContainer = document.querySelector('.charactersContainer'),
      turnOn = document.querySelector('.turnOn'),
      turnOff = document.querySelector('.turnOff'),
      back__button = document.querySelector('.back__button'),
      randomCharacter__item = document.querySelector('.randomCharacter__item'),
      selectedCharacter__item = document.querySelector('.selectedCharacter__item'),
      warning = document.querySelector('.warning'),
      wrapper = document.querySelector('.wrapper'),
      additionalEffect = document.querySelector('.additionalEffect'),
      additionalEffect__btn = document.querySelector('#additionalEffect__btn'),
      body = document.querySelector('.body'),
      backgroundMusic__menu = document.querySelector('.backgroundMusic__menu'),
      backgroundMusic__fighting = document.querySelector('.backgroundMusic__fighting'),
      backgroundMusic__on = document.querySelector('.backgroundMusic__on'),
      backgroundMusic__off = document.querySelector('.backgroundMusic__off'),
      backgroundMusic = document.querySelector('.backgroundMusic'),
      closeTheWarning = document.querySelector('.closeTheWarning'),
      waveBtn = document.querySelector('.wave-btn'),
      wrapper1 = document.querySelector('.wrapper1');
  var lifeCountDanger,
      lifeCountBiker,
      lifeCountNinja,
      character1,
      character2,
      character3,
      enemy,
      randomNumber,
      lifeCountForDanger,
      lifeCountForBiker,
      lifeCountForNinja,
      randomCharacter = Math.floor(Math.random() * 2),
      checkTurnOn = true,
      back = document.querySelector('.back'),
      askUser = document.querySelector('.askUser'),
      dangerAnimationClassTakeDamage,
      leftCharacter,
      rightCharacter,
      dangerImg,
      bikerImg,
      ninjaImg,
      fighting = false;

  if (_this.innerWidth <= 950) {
    warning.classList.remove('hide');
    warning.classList.add('show');
    wrapper.style.display = 'none';
    wrapper1.style.display = 'none';
  }

  if (warning.classList.contains('hide')) {
    backgroundMusic.style.top = '6%';
  }

  back__button.addEventListener('click', function () {
    if (_this.innerWidth > 950) {
      body.style.background = 'url("img/1.jpg") no-repeat';
      body.style.backgroundSize = '100%';
      body.style.backgroundColor = '#000';
    }

    fighting = false;

    if (backgroundMusic__off.classList.contains('hide')) {
      backgroundMusic__fighting.pause();
      backgroundMusic__menu.play();
    }

    mainContent.style.display = 'none';
    chooseCharacter.style.display = 'block';
    selectedCharacter__item.innerHTML = '';
    randomCharacter__item.innerHTML = '';
    container__title.innerHTML = '';
    randomCharacter = Math.floor(Math.random() * 2);
  });
  turnOff.addEventListener('click', function () {
    turnOff.classList.add('hide');
    turnOn.classList.remove('hide');
    btn.setAttribute('data-sound', 'sounds/punch');
    checkTurnOn = true;
  });
  turnOn.addEventListener('click', function () {
    turnOn.classList.add('hide');
    turnOff.classList.remove('hide');
    btn.removeAttribute('data-sound');
    checkTurnOn = false;
  });
  backgroundMusic__on.addEventListener('click', function () {
    backgroundMusic__on.classList.add('hide');
    backgroundMusic__off.classList.remove('hide');

    if (fighting == false) {
      backgroundMusic__menu.pause();
    } else {
      backgroundMusic__fighting.pause();
    }
  });
  backgroundMusic__off.addEventListener('click', function () {
    backgroundMusic__off.classList.add('hide');
    backgroundMusic__on.classList.remove('hide');

    if (fighting == false) {
      backgroundMusic__menu.play();
    } else {
      backgroundMusic__fighting.play();
    }
  });
  closeTheWarning.addEventListener('click', function () {
    warning.classList.add('hide');

    if (warning.classList.contains('hide')) {
      backgroundMusic.style.top = '6%';
    }
  });

  var Character =
  /*#__PURE__*/
  function () {
    function Character(charactersLife, lifeCount, numberOfLifes, charactersLifeIcon, altForIcon, srcForImg, altForImg, charactersAnimationStatic, characterAnimationClassStatic, charactersAnimationKick, characterAnimationClassKick, charactersAnimationTakeDamage, characterAnimationClassTakeDamage, charactersAnimationDie, characterAnimationClassDie, characterImgSrc, characterImg, name) {
      _classCallCheck(this, Character);

      this.charactersLife = charactersLife;
      this.lifeCount = lifeCount;
      this.numberOfLifes = numberOfLifes;
      this.charactersLifeIcon = charactersLifeIcon;
      this.altForIcon = altForIcon;
      this.srcForImg = srcForImg;
      this.altForImg = altForImg;
      this.charactersAnimationStatic = charactersAnimationStatic;
      this.characterAnimationClassStatic = characterAnimationClassStatic;
      this.charactersAnimationKick = charactersAnimationKick;
      this.characterAnimationClassKick = characterAnimationClassKick;
      this.charactersAnimationTakeDamage = charactersAnimationTakeDamage;
      this.characterAnimationClassTakeDamage = characterAnimationClassTakeDamage;
      this.charactersAnimationDie = charactersAnimationDie;
      this.characterAnimationClassDie = characterAnimationClassDie;
      this.characterImgSrc = characterImgSrc;
      this.characterImg = characterImg;
      this.name = name;
    }

    _createClass(Character, [{
      key: "create",
      value: function create(place) {
        var element = document.createElement('div');
        var appendPlace = document.querySelector(place);
        element.innerHTML = "\n                    <div class=\"".concat(this.charactersLife, " life__item\">\n                        <span class=\"").concat(this.lifeCount, " lifeCountRight lifeCount\">").concat(this.numberOfLifes, "</span>\n                        <img src=\"img/life.png\" class=\"").concat(this.charactersLifeIcon, " life\">\n                    </div>\n\n                    <div class=\"animations__block\">\n                        <video src=\"").concat(this.charactersAnimationStatic, "\" autoplay loop width=\"330\" class=\"deleteWhileDie animation__video ").concat(this.characterAnimationClassStatic, " show\"></video>\n                        <video src=\"").concat(this.charactersAnimationKick, "\" width=\"330\" class=\"animation__video ").concat(this.characterAnimationClassKick, " hide\"></video>\n                        <video src=\"").concat(this.charactersAnimationTakeDamage, "\" width=\"330\" class=\"deleteWhileDie animation__video ").concat(this.characterAnimationClassTakeDamage, " hide\"></video>\n                        <video src=\"").concat(this.charactersAnimationDie, "\" width=\"330\" class=\"animation__video ").concat(this.characterAnimationClassDie, " hide\"></video>\n                        <img src=\"").concat(this.characterImgSrc, "\" alt=\"\" width=\"330\" class=\"animation__img ").concat(this.characterImg, " hide\">\n                    </div>\n                    <div class=\"footer\">\n                        <div class=\"character__title\">").concat(this.name, "</div>\n                    </div>\n            ");
        appendPlace.append(element);
      }
    }]);

    return Character;
  }();

  var dangerCharacter = new Character('dangerCharactersLife', 'lifeCountDanger', 130, 'dangerCharactersLife__img', 'dangerCharactersLife', 'img/danger.jpg', 'danger', 'animations/danger/dangerStatic.mp4', 'dangerAnimationClassStatic', 'animations/danger/dangerKick.mp4', 'dangerAnimationClassKick', 'animations/danger/dangerTakeDamage.mp4', 'dangerAnimationClassTakeDamage', 'animations/danger/dangerDie.mp4', 'dangerAnimationClassDie', 'animations/danger/danger.png', 'dangerImg', 'Danger!');
  var bikerCharacter = new Character('bikerCharactersLife', 'lifeCountBiker', 105, 'bikerCharactersLife__img', 'bikerCharactersLife', 'img/biker.jpg', 'biker', 'animations/biker/bikerStatic.mp4', 'bikerAnimationClassStatic', 'animations/biker/bikerKick.mp4', 'bikerAnimationClassKick', 'animations/biker/bikerTakeDamage.mp4', 'bikerAnimationClassTakeDamage', 'animations/biker/bikerDie.mp4', 'bikerAnimationClassDie', 'animations/biker/biker.png', 'bikerImg', 'Biker!');
  var ninjaCharacter = new Character('ninjaCharactersLife', 'lifeCountNinja', 110, 'ninjaCharactersLife__img', 'ninjaCharactersLife', 'img/ninja.jpg', 'ninja', 'animations/ninja/ninjaStatic.mp4', 'ninjaAnimationClassStatic', 'animations/ninja/ninjaKick.mp4', 'ninjaAnimationClassKick', 'animations/ninja/ninjaTakeDamage.mp4', 'ninjaAnimationClassTakeDamage', 'animations/ninja/ninjaDie.mp4', 'ninjaAnimationClassDie', 'animations/ninja/ninja.png', 'ninjaImg', 'Ninja!');

  function choosePlace(placeForCharacter) {
    var lifeCountForSelected = document.querySelector(placeForCharacter);
    lifeCountForSelected.classList.remove('lifeCountRight');
    lifeCountForSelected.classList.add('lifeCountLeft');
  }

  function chooseCharacterFunction(createdCharacter) {
    chooseCharacter.style.display = 'none';
    mainContent.style.display = 'block';
    createdCharacter.create('.selectedCharacter__item');
  }

  chooseCharacter__elements.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (backgroundMusic__off.classList.contains('hide')) {
        backgroundMusic__menu.pause();
        backgroundMusic__fighting.play();
      } // backgroundMusic__on.classList.add('hide');
      // backgroundMusic__off.classList.remove('hide');


      fighting = true; // backgroundMusic__menu.parentNode.removeChild(backgroundMusic__menu);

      if (_this.innerWidth > 950) {
        body.style.background = 'url("img/2.jpg")';
      }

      if (e.target.classList.contains('chooseCharacter__first')) {
        character1 = true;
        chooseCharacterFunction(dangerCharacter);
        choosePlace('.lifeCountDanger');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
          enemy = 'biker';
          console.log(enemy);
        } else {
          ninjaCharacter.create('.randomCharacter__item');
          enemy = 'ninja';
          console.log(enemy);
        }
      } else if (e.target.classList.contains('chooseCharacter__second')) {
        character2 = true;
        chooseCharacterFunction(bikerCharacter);
        choosePlace('.lifeCountBiker');

        if (randomCharacter === 0) {
          dangerCharacter.create('.randomCharacter__item');
          enemy = 'danger';
          console.log(enemy);
        } else {
          ninjaCharacter.create('.randomCharacter__item');
          enemy = 'ninja';
          console.log(enemy);
        }
      } else if (e.target.classList.contains('chooseCharacter__third')) {
        character3 = true;
        chooseCharacterFunction(ninjaCharacter);
        choosePlace('.lifeCountNinja');

        if (randomCharacter === 0) {
          bikerCharacter.create('.randomCharacter__item');
          enemy = 'biker';
          console.log(enemy);
        } else {
          dangerCharacter.create('.randomCharacter__item');
          enemy = 'danger';
          console.log(enemy);
        }
      }

      if (character1) {
        creatingCharacter('Вы играете за персонажа под ником "Danger!"');
      } else if (character2) {
        creatingCharacter('Вы играете за персонажа под ником "Biker!"');
      } else if (character3) {
        creatingCharacter('Вы играете за персонажа под ником "Ninja!"');
      }
    });
  });

  function creatingCharacter(titleText) {
    var title = document.createElement('div');
    title.classList.add('secondTitle', 'gagalin');
    title.innerHTML = titleText;
    container__title.append(title);
  }

  function lifes() {
    lifeCountDanger = document.querySelector('.lifeCountDanger');
    lifeCountBiker = document.querySelector('.lifeCountBiker');
    lifeCountNinja = document.querySelector('.lifeCountNinja');
    dangerCharactersLife = document.querySelector('.dangerCharactersLife');
    bikerCharactersLife = document.querySelector('.bikerCharactersLife');
    ninjaCharactersLife = document.querySelector('.ninjaCharactersLife');
    animation__video = document.querySelectorAll('.animation__video');
    dangerAnimationClassTakeDamage = document.querySelector('.dangerAnimationClassTakeDamage');
    dangerAnimationClassDie = document.querySelector('.dangerAnimationClassDie');
    dangerAnimationClassStatic = document.querySelector('.dangerAnimationClassStatic');
    dangerAnimationClassKick = document.querySelector('.dangerAnimationClassKick');
    bikerAnimationClassTakeDamage = document.querySelector('.bikerAnimationClassTakeDamage');
    bikerAnimationClassDie = document.querySelector('.bikerAnimationClassDie');
    bikerAnimationClassStatic = document.querySelector('.bikerAnimationClassStatic');
    bikerAnimationClassKick = document.querySelector('.bikerAnimationClassKick');
    ninjaAnimationClassTakeDamage = document.querySelector('.ninjaAnimationClassTakeDamage');
    ninjaAnimationClassDie = document.querySelector('.ninjaAnimationClassDie');
    ninjaAnimationClassStatic = document.querySelector('.ninjaAnimationClassStatic');
    ninjaAnimationClassKick = document.querySelector('.ninjaAnimationClassKick');
    deleteWhileDie = document.querySelectorAll('.deleteWhileDie');
    dangerImg = document.querySelector('.dangerImg');
    bikerImg = document.querySelector('.bikerImg');
    ninjaImg = document.querySelector('.ninjaImg');
  } // функция которая срабатывает при нажатии на клавишу btn, тем самым присваивая переменным их значения


  function randomPunch(randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja) {
    btn.addEventListener('click', function () {
      btn.classList.add('disableButton');
      setTimeout(function () {
        btn.classList.remove('disableButton');
      }, 1600); // TODO: 6. В скрипте где мы переключаем анимации сделать кнопку 'BEAT HIM' неактивной пока видеоанимация не закончится
      // TODO: 7. Вместо перебора всех анимаций перебрать только 2 анимации удара  и получения удара, и потом попробовать сделать так чтобы к/д между ударами был меньше, баг: прошлая анимация вместо удаления опускается вниз и уже после того как она проиграет она удаляется
      // TODO: 8. Сделать отдельную фукнцию которая будет проверять на то какие персонажи стоят слева и справа, и уже в ней вызывать функцию game over
      // TODO: 9. Первым проверять хватает ли жизней, если нет то запускать функцию и в ней удалять последующую функцию чтобы она не сработала
      // TODO: 10. Если жизней  <= 0, то делаем анимации hide, запускаем их заново с нулевой секунды и уже потом после того как сработает событие 'ended' мы запускаем функцию game over

      randomNumber = Math.floor(Math.random() * 2); // генерирует рандомное число от 0 до 1

      lifes(); // присваивает переменным их значения            

      if (randomNumber === 0) {
        if (character1) {
          animationFunctionFirstTakeDamage(dangerAnimationClassStatic, dangerAnimationClassTakeDamage, bikerAnimationClassStatic, bikerAnimationClassKick, ninjaAnimationClassStatic, ninjaAnimationClassKick);
          updateLifeForAll(lifeCountForDanger, 32, 7, lifeCountDanger);
        } // end of 'if'
        else if (character2) {
            animationFunctionFirstTakeDamage(bikerAnimationClassStatic, bikerAnimationClassTakeDamage, dangerAnimationClassStatic, dangerAnimationClassKick, ninjaAnimationClassStatic, ninjaAnimationClassKick);
            updateLifeForAll(lifeCountForBiker, 24, 5, lifeCountBiker);
          } else if (character3) {
            animationFunctionFirstTakeDamage(ninjaAnimationClassStatic, ninjaAnimationClassTakeDamage, bikerAnimationClassStatic, bikerAnimationClassKick, dangerAnimationClassStatic, dangerAnimationClassKick);
            updateLifeForAll(lifeCountForNinja, 29, 7, lifeCountNinja);
          }
      } // end of 'if'
      else {
          if (character1) {
            if (bikerCharactersLife) {
              animationFunctionSecondTakeDamage(bikerAnimationClassStatic, bikerAnimationClassTakeDamage, dangerAnimationClassStatic, dangerAnimationClassKick);
              updateLifeForAll(lifeCountForBiker, 24, 5, lifeCountBiker);
            } else if (ninjaCharactersLife) {
              animationFunctionSecondTakeDamage(ninjaAnimationClassStatic, ninjaAnimationClassTakeDamage, dangerAnimationClassStatic, dangerAnimationClassKick);
              updateLifeForAll(lifeCountForNinja, 29, 7, lifeCountNinja);
            }
          } else if (character2) {
            if (dangerCharactersLife) {
              animationFunctionSecondTakeDamage(dangerAnimationClassStatic, dangerAnimationClassTakeDamage, bikerAnimationClassStatic, bikerAnimationClassKick);
              updateLifeForAll(lifeCountForDanger, 32, 7, lifeCountDanger);
            } else if (ninjaCharactersLife) {
              animationFunctionSecondTakeDamage(ninjaAnimationClassStatic, ninjaAnimationClassTakeDamage, bikerAnimationClassStatic, bikerAnimationClassKick);
              updateLifeForAll(lifeCountForNinja, 29, 7, lifeCountNinja);
            }
          } else if (character3) {
            if (bikerCharactersLife) {
              animationFunctionSecondTakeDamage(bikerAnimationClassStatic, bikerAnimationClassTakeDamage, ninjaAnimationClassStatic, ninjaAnimationClassKick);
              updateLifeForAll(lifeCountForBiker, 24, 5, lifeCountBiker);
            } else if (dangerCharactersLife) {
              animationFunctionSecondTakeDamage(dangerAnimationClassStatic, dangerAnimationClassTakeDamage, ninjaAnimationClassStatic, ninjaAnimationClassKick);
              updateLifeForAll(lifeCountForDanger, 32, 7, lifeCountDanger);
            }
          }
        } // end of 'else'


      if (lifeCountDanger != null && lifeCountDanger != undefined) {
        gameOverFunction(lifeCountDanger, gameOver, character1, dangerAnimationClassDie);
      }

      if (lifeCountBiker != null && lifeCountBiker != undefined) {
        gameOverFunction(lifeCountBiker, gameOver, character2, bikerAnimationClassDie);
      }

      if (lifeCountNinja != null && lifeCountNinja != undefined) {
        gameOverFunction(lifeCountNinja, gameOver, character3, ninjaAnimationClassDie);
      }
    });

    function gameOverFunction(lifeCounting, gameOver, ourCharacter, characterAnimationClassDie) {
      if (lifeCounting.innerText <= 0) {
        setTimeout(function () {
          deleteWhileDie.forEach(function (item) {
            item.parentNode.removeChild(item);
          });
        }, 500);
        lifeCounting.innerText = 0;

        if (ourCharacter) {
          setTimeout(function () {
            characterAnimationClassDie.classList.remove('hide');
            characterAnimationClassDie.classList.add('show');
            characterAnimationClassDie.play();
          }, 500);
          characterAnimationClassDie.addEventListener('ended', function () {
            gameOver.classList.remove('hide');
            charactersContainer.classList.add('hide'); // back__button.classList.add('disableBackButton'); Можно использовать данный метод чтобы сделать кнопку неактивной
            // back__button.setAttribute('disable', 'true'); Можно использовать данные методы чтобы просто деактивировать кнопку, НО мы её просто убираем из виду

            back.style.display = 'none';
            container__title.innerHTML = '';
            help.classList.add('hide');
            askUser.style.display = 'none';
          });

          if (enemy == 'danger') {
            dangerAnimationClassKick.classList.remove('hide');
            dangerAnimationClassKick.classList.add('show');
            dangerAnimationClassKick.play();
            dangerAnimationClassKick.addEventListener('ended', function () {
              dangerImg.classList.remove('hide');
              dangerImg.classList.add('show');
            });
          } else if (enemy == 'biker') {
            bikerAnimationClassKick.classList.remove('hide');
            bikerAnimationClassKick.classList.add('show');
            bikerAnimationClassKick.play();
            bikerAnimationClassKick.addEventListener('ended', function () {
              bikerImg.classList.remove('hide');
              bikerImg.classList.add('show');
            });
          } else if (enemy == 'ninja') {
            ninjaAnimationClassKick.classList.remove('hide');
            ninjaAnimationClassKick.classList.add('show');
            ninjaAnimationClassKick.play();
            ninjaAnimationClassKick.addEventListener('ended', function () {
              ninjaImg.classList.remove('hide');
              ninjaImg.classList.add('show');
            });
          }

          if (checkTurnOn) {
            characterAnimationClassDie.addEventListener('ended', function () {
              gameOver.classList.add('youLose');
              new Audio("sounds/gameOver.mp3").play();
            });
          }
        } else {
          if (character1) {
            dangerAnimationClassKick.addEventListener('ended', function () {
              dangerImg.classList.remove('hide');
              dangerImg.classList.add('show');
            });
          } else if (character2) {
            bikerAnimationClassKick.addEventListener('ended', function () {
              bikerImg.classList.remove('hide');
              bikerImg.classList.add('show');
            });
          } else if (character3) {
            ninjaAnimationClassKick.addEventListener('ended', function () {
              ninjaImg.classList.remove('hide');
              ninjaImg.classList.add('show');
            });
          }

          if (enemy == 'danger') {
            lifeCountDanger.innerText = 0;
            setTimeout(function () {
              dangerAnimationClassDie.classList.remove('hide');
              dangerAnimationClassDie.classList.add('show');
              dangerAnimationClassDie.play();
            }, 500);
          } else if (enemy == 'biker') {
            lifeCountBiker.innerText = 0;
            setTimeout(function () {
              bikerAnimationClassDie.classList.remove('hide');
              bikerAnimationClassDie.classList.add('show');
              bikerAnimationClassDie.play();
            }, 500);
          } else if (enemy == 'ninja') {
            lifeCountNinja.innerText = 0;
            setTimeout(function () {
              ninjaAnimationClassDie.classList.remove('hide');
              ninjaAnimationClassDie.classList.add('show');
              ninjaAnimationClassDie.play();
            }, 500);
          }

          setTimeout(function () {
            if (checkTurnOn) {
              gameOver.classList.remove('hide');
              charactersContainer.classList.add('hide'); // back__button.classList.add('disableBackButton'); Можно использовать данный метод чтобы сделать кнопку неактивной
              // back__button.setAttribute('disable', 'true'); Можно использовать данные методы чтобы просто деактивировать кнопку, НО мы её просто убираем из виду

              back.style.display = 'none';
              container__title.innerHTML = '';
              help.classList.add('hide');
              askUser.style.display = 'none';
              gameOver.classList.add('youWon');
              new Audio("sounds/youWon.mp3").play();
            }
          }, 2700);
        }
      }
    }

    function updateLifeForAll(lifeCountForCharacter, maxLife, minLife, lifeCountCharacter) {
      lifeCountForCharacter = Math.floor(Math.random() * (maxLife - minLife)) + minLife;
      lifeCountCharacter.innerText -= lifeCountForCharacter;
    }
  }

  randomPunch(randomNumber, lifeCountForDanger, lifeCountForBiker, lifeCountForNinja);

  function animationFunctionFirstTakeDamage(firstCharacterAnimationClassStatic, firstCharacterAnimationClassTakeDamage, secondCharacterAnimationClassStatic, secondCharacterAnimationClassKick, thirdCharacterAnimationClassStatic, thirdCharacterAnimationClassKick) {
    animation__video.forEach(function (item) {
      item.classList.remove('hide', 'show');
      item.classList.add('hide');
      firstCharacterAnimationClassStatic.classList.remove('hide');
      firstCharacterAnimationClassStatic.classList.add('show');
    });

    if (enemy == 'danger') {
      dangerAnimationClassKick.classList.remove('hide');
      dangerAnimationClassKick.classList.add('show');
      dangerAnimationClassKick.play();
      dangerAnimationClassKick.addEventListener('ended', function () {
        dangerAnimationClassKick.classList.remove('show');
        dangerAnimationClassKick.classList.add('hide');
        dangerAnimationClassStatic.classList.remove('hide');
        dangerAnimationClassStatic.classList.add('show');
      });
    } else if (enemy == 'biker') {
      secondCharacterAnimationClassKick.classList.remove('hide');
      secondCharacterAnimationClassKick.classList.add('show');
      secondCharacterAnimationClassKick.play();
      secondCharacterAnimationClassKick.addEventListener('ended', function () {
        secondCharacterAnimationClassKick.classList.remove('show');
        secondCharacterAnimationClassKick.classList.add('hide');
        secondCharacterAnimationClassStatic.classList.remove('hide');
        secondCharacterAnimationClassStatic.classList.add('show');
      });
    } else if (enemy == 'ninja') {
      thirdCharacterAnimationClassKick.classList.remove('hide');
      thirdCharacterAnimationClassKick.classList.add('show');
      thirdCharacterAnimationClassKick.play();
      thirdCharacterAnimationClassKick.addEventListener('ended', function () {
        thirdCharacterAnimationClassKick.classList.remove('show');
        thirdCharacterAnimationClassKick.classList.add('hide');
        thirdCharacterAnimationClassStatic.classList.remove('hide');
        thirdCharacterAnimationClassStatic.classList.add('show');
      });
    }

    setTimeout(function () {
      firstCharacterAnimationClassStatic.classList.remove('show');
      firstCharacterAnimationClassStatic.classList.add('hide');
      firstCharacterAnimationClassTakeDamage.classList.add('show');
      firstCharacterAnimationClassTakeDamage.play();
    }, 500);
    firstCharacterAnimationClassTakeDamage.addEventListener('ended', function () {
      firstCharacterAnimationClassTakeDamage.classList.remove('show');
      firstCharacterAnimationClassTakeDamage.classList.add('hide');
      firstCharacterAnimationClassStatic.classList.remove('hide');
      firstCharacterAnimationClassStatic.classList.add('show');
    });
  }

  ;

  function animationFunctionSecondTakeDamage(firstCharacterAnimationClassStatic, fristCharacterAnimationClassTakeDamage, secondCharacterAnimationClassStatic, secondCharacterAnimationClassKick) {
    animation__video.forEach(function (item) {
      item.classList.remove('hide', 'show');
      item.classList.add('hide');
      firstCharacterAnimationClassStatic.classList.remove('hide');
      firstCharacterAnimationClassStatic.classList.add('show');
    });
    secondCharacterAnimationClassKick.classList.remove('hide');
    secondCharacterAnimationClassKick.classList.add('show');
    secondCharacterAnimationClassKick.play();
    setTimeout(function () {
      firstCharacterAnimationClassStatic.classList.remove('show');
      firstCharacterAnimationClassStatic.classList.add('hide');
      fristCharacterAnimationClassTakeDamage.classList.add('show');
      fristCharacterAnimationClassTakeDamage.play();
    }, 500);
    fristCharacterAnimationClassTakeDamage.addEventListener('ended', function () {
      fristCharacterAnimationClassTakeDamage.classList.remove('show');
      fristCharacterAnimationClassTakeDamage.classList.add('hide');
      firstCharacterAnimationClassStatic.classList.remove('hide');
      firstCharacterAnimationClassStatic.classList.add('show');
    });
    secondCharacterAnimationClassKick.addEventListener('ended', function () {
      secondCharacterAnimationClassKick.classList.remove('show');
      secondCharacterAnimationClassKick.classList.add('hide');
      secondCharacterAnimationClassStatic.classList.remove('hide');
      secondCharacterAnimationClassStatic.classList.add('show');
    });
  }

  reload_btn.addEventListener('click', function () {
    window.location.reload();
  }); // При клике на кнопку страница перезагружается

  help__close__item.addEventListener('click', function () {
    help.classList.add('hide');
  }); // При клике закрывается элемент с подсказками

  waveBtn.addEventListener('click', function () {
    wrapper.style.display = 'flex';
    setTimeout(function () {
      window.scrollTo(0, 1200);
    }, 50);
  }); // anime.js

  anime({
    targets: '.letter',
    opacity: 1,
    translateY: 50,
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    },
    scale: anime.stagger([0.7, 1], {
      from: 'center'
    }),
    delay: anime.stagger(100, {
      start: 500
    }),
    translateX: [-10, 30]
  });
  anime({
    targets: '.title',
    color: ['#E700FE', '#2df00f'],
    loop: true,
    easing: 'easeInOutQuart',
    duration: 2000,
    direction: 'alternate'
  });
  var hrAnime = anime({
    targets: '.chooseCharacter__hr',
    backgroundColor: ['rgb(255, 0, 0)', 'rgb(0, 255, 255)'],
    width: ['-2%', '100%'],
    duration: 2000,
    easing: 'linear',
    loop: true
  }); // additionalEffect__btn.addEventListener('click', () => {
  //     setTimeout(function () {
  //         window.scrollTo(0, 1200);
  //     }, 50);
  // }); // скролл до низа страница при нажатии на клавишу: "дополнительный эффект"
  // function slowScroll (id) {
  //     let offset = 0;
  //     $('html, body').animate({
  //         scrollTop: $(id).offset ().top - offset
  //     }, 500);
  //     return false;
  // }
});