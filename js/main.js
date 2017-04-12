$('#more').on('click', function() {
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000)

  return false
})

var templateGenerator = function (templateId, imageUrlPrefix, imageCssSelector, appendCssSelector, data) {
  var template = $(templateId)
  var currentItem
  var currentRate

  for (var index = 0; index < data.length; index++) {
    currentItem = template.clone().prop({ id: "techno" + index })

    // Find image
    currentItem.find(imageCssSelector).css('background-image', 'url("'
      + imageUrlPrefix + data[index].img + '")')

    // Title
    currentItem.find('h2').text(data[index].name)

    // Star
    currentRate = data[index].rate

    if (currentRate.type === 'rate') {
      currentItem.find(currentRate.selector).children().each(function (index, item) {
        node = $(item)
        index + 1 <= currentRate.value ? node.addClass('start-yellow') : node.addClass('start-gray')
      })
    } else if (currentRate.type === 'text') {
      currentItem.find(currentRate.selector).text(currentRate.value)
    } else {
      currentItem.find(currentRate.selector).remove()
    }

    currentItem.appendTo(appendCssSelector)
  }
}

// Add techno that I use.
// Do you know what ? When you don't use template engine like Aurelia, it's very long...
var technos = [
  {
    name: 'Java 8',
    img: 'java8.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 3
    }
  },
  {
    name: 'Jenkins 2',
    img: 'jenkins.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 3
    }
  },
  {
    name: 'Shell unix',
    img: 'bash.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 3
    }
  },
  {
    name: 'Angular 1.x',
    img: 'angular1.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Maven',
    img: 'maven.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 4
    }
  },
  {
    name: 'GitLab CE',
    img: 'gitlab.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Rundeck OSS',
    img: 'rundeck.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Puppet CE',
    img: 'puppet.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Nexus OSS',
    img: 'nexus.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Redis',
    img: 'redis.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 4
    }
  },
  {
    name: 'NodeJs',
    img: 'nodejs.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'Docker and Docker compose',
    img: 'docker.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 3
    }
  },
  {
    name: 'MongoDB',
    img: 'mongodb.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  }
]

templateGenerator('#techno-template', './img/techno-used/', '.techno-image', '.used-techno', technos)

var skills = [
  {
    name: 'FrontEnd developpement',
    img: 'seo-2151033_200.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 2
    }
  },
  {
    name: 'BackEnd developpement',
    img: 'computer-295481_100.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 4
    }
  },
  {
    name: 'SysAdmin',
    img: 'server-98466_100.png',
    rate: {
      type: 'rate',
      selector: '.star-rate',
      value: 1
    }
  }
]

templateGenerator('#skill-template', './img/skills/', '.skill-image', '.skills', skills)

var searchTechno = [
  {
    name: 'Aurelia JS',
    img: 'aurelia.png',
    rate: {
      type: 'text',
      selector: '.comment',
      value: 'Utiliser dans un cadre perso'
    }
  },
  {
    name: 'HashiCorp Vault',
    img: 'vault.png',
    rate: {
      type: 'text',
      selector: '.comment',
      value: 'Testé dans le cadre d\'un POC'
    }
  },
  {
    name: 'Meteor',
    img: 'meteor.png',
    rate: {
      type: 'text',
      selector: '.comment',
      value: 'Utiliser dans un cadre perso'
    }
  },
  {
    name: 'Tuleap',
    img: 'tuleap.png',
    rate: {
      selector: '.comment'
    }
  },
  {
    name: 'rkt (CoreOS)',
    img: 'rkt.png',
    rate: {
      selector: '.comment'
    }
  },
  {
    name: 'Unix BSD',
    img: 'dragonbsd.png',
    rate: {
      selector: '.comment'
    }
  },
  {
    name: 'Dart',
    img: 'dart.png',
    rate: {
      type: 'text',
      selector: '.comment',
      value: 'Utiliser dans un cadre perso'
    }
  },
  {
    name: 'Go',
    img: 'go.png',
    rate: {
      selector: '.comment'
    }
  },
  {
    name: 'Kotlin',
    img: 'kotlin.png',
    rate: {
      selector: '.comment'
    }
  },
  {
    name: 'GWT',
    img: 'gwt.png',
    rate: {
      selector: '.comment'
    }
  }
]

templateGenerator('#search-techno-template', './img/search-techno/', '.techno-image', '.search-techno', searchTechno)
