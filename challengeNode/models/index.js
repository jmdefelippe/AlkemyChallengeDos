const Post = require('./Post');
const Categoria = require('./Categoria');

Categoria.hasMany(Post, { as: 'posts', foreignKey: { allowNull: false, field: 'categoria_id', name: 'categoriaId' }, sourceKey: 'id', onUpdate: 'CASCADE', onDelete: 'CASCADE' });
Post.belongsTo(Categoria, { as: 'categorias', foreignKey: { allowNull: false, field: 'categoria_id', name: 'categoriaId' }, targetKey: 'id' });
