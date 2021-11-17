const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(callback) {

        const conn = dbconn();

        // const query = function(sql, data) {
        //     return new Promise(function(resolve, reject){
        //         conn.query(sql, [], function(error, results, field){
        //             return error ? reject(error) : resolve(results);
        //         })
        //     })
        // }

        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, field) => (error ? reject(error) : resolve(results))))
        
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'select no, name, password, message, reg_date from guestbook order by no desc', 
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'insert into guestbook(name, password, message, reg_date) values (?, ?, ?, now())',
                [guestbook.name, guestbook.password, guestbook.message]
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }       
    },
    delete: async function(no) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'delete from guestbook where no = ?',
                [no]
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }       
    }
}