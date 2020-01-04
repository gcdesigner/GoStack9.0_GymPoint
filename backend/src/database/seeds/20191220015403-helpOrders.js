module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'help_orders',
      [
        {
          student_id: 1,
          question: 'Teste de pergunta numero 1',
          answer: null,
          answer_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 2,
          question: 'Teste de pergunta numero 2',
          answer: null,
          answer_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 3,
          question: 'Teste de pergunta numero 3',
          answer: 'Teste de resposta da pergunta 3',
          answer_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          student_id: 4,
          question: 'Teste de pergunta numero 4',
          answer: null,
          answer_at: null,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('help_orders', null, {});
  },
};
