/**
 * Created by Adarsh on 12/9/15.
 */

var application = angular.module("Application", ['pascalprecht.translate']);

application.controller('TranslateController', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});

application.config(function ($translateProvider) {
    $translateProvider.translations('en', {
        HEADLINE: 'Welcome to the Application',
        INTRO_TEXT: 'I18N Translations ',
        BUTTON_TEXT_EN: 'english',
        BUTTON_TEXT_DE: 'german',
        BUTTON_TEXT_FR: 'french'
    })
        .translations('de', {
            HEADLINE: "Willkommen in der Anwendung",
            INTRO_TEXT: 'I18N Übersetzungen',
            BUTTON_TEXT_EN: 'englisch',
            BUTTON_TEXT_DE: 'deutsch',
            BUTTON_TEXT_FR: 'Französisch'
        }).translations('fr', {
            HEADLINE: "BIENVENUE À LA DEMANDE",
            INTRO_TEXT: 'I18N Traductions',
            BUTTON_TEXT_EN: 'Anglais',
            BUTTON_TEXT_DE: 'allemand',
            BUTTON_TEXT_FR: 'français'
        });
    $translateProvider.preferredLanguage('en');
});
