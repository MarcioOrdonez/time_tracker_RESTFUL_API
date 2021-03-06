import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('tasks', table=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('state').notNullable();
        table.string('start');
        table.string('stop');
        table.string('total_time');

        table.integer('owner')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('tasks');
}