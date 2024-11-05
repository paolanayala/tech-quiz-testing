import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('renders Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });
});

it('loads the questions and initializes the quiz', () => {
  mount(<Quiz />);
  cy.contains('Start Quiz').click();
  cy.intercept('GET', '/api/questions/random', { fixture: 'quiz.json' });
  cy.get('button').should('have.length', 4);
}