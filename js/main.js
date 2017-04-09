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
    currentItem.find('.star-rate').children().each(function (index, item) {
      node = $(item)
      index + 1 <= currentRate ? node.addClass('start-yellow') : node.addClass('start-gray')
    })

    currentItem.appendTo(appendCssSelector)
  }
}

// Add techno that I use.
// Do you know what ? When you don't use template engine like Aurelia, it's very long...
var technos = [
  {
    name: 'Java 8',
    img: 'java8.png',
    rate: 3
  },
  {
    name: 'Jenkins 2',
    img: 'jenkins.png',
    rate: 3
  },
  {
    name: 'Shell unix',
    img: 'bash.png',
    rate: 3
  },
  {
    name: 'Angular 1.x',
    img: 'angular1.png',
    rate: 2
  },
  {
    name: 'Maven',
    img: 'maven.png',
    rate: 4
  },
  {
    name: 'GitLab CE',
    img: 'gitlab.png',
    rate: 2
  },
  {
    name: 'Rundeck OSS',
    img: 'rundeck.png',
    rate: 2
  },
  {
    name: 'Puppet CE',
    img: 'puppet.png',
    rate: 2
  },
  {
    name: 'Nexus OSS',
    img: 'nexus.png',
    rate: 2
  },
  {
    name: 'Redis',
    img: 'redis.png',
    rate: 4
  },
  {
    name: 'NodeJs',
    img: 'nodejs.png',
    rate: 2
  },
  {
    name: 'Docker and Docker compose',
    img: 'docker.png',
    rate: 3
  },
  {
    name: 'MongoDB',
    img: 'mongodb.png',
    rate: 2
  }
]

templateGenerator('#techno-template', './img/techno-used/', '.techno-image', '.used-techno', technos)

var skills = [
  {
    name: 'FrontEnd developpement',
    img: 'seo-2151033_200.png',
    rate: 2
  },
  {
    name: 'BackEnd developpement',
    img: 'computer-295481_100.png',
    rate: 4
  },
  {
    name: 'SysAdmin',
    img: 'server-98466_100.png',
    rate: 1
  }
]

templateGenerator('#skill-template', './img/skills/', '.skill-image', '.skills', skills)

var searchTechno = [
  {
    name: 'Aurelia JS',
    img: '',
    rate: 1
  },
  {
    name: 'HashiCorp Vault',
    img: '',
    rate: 1
  },
  {
    name: 'Meteor',
    img: '',
    rate: 1
  },
  {
    name: 'Tuleap',
    img: '',
    rate: 0
  },
  {
    name: 'rkt (CoreOS)',
    img: '',
    rate: 0
  },
  {
    name: 'Unix BSD',
    img: '',
    rate: 0
  },
  {
    name: 'Dart',
    img: '',
    rate: 1
  },
  {
    name: 'Go',
    img: '',
    rate: 0
  },
  {
    name: 'Kotlin',
    img: '',
    rate: 0
  },
  {
    name: 'GWT',
    img: '',
    rate: 0
  }
]

templateGenerator('#search-techno-template', './img/search-techno/', '.techno-image', '.search-techno', searchTechno)
