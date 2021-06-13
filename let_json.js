/**
 *
 * @param filename
 * @returns {Promise<unknown>}
 */
function let_json(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data.toString()));
            }
        });
    });
}
module.exports = let_json;
