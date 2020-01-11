import mongodb from '../../config/mongodb';

const Schema = mongodb.Schema;

const Project = {
  name: {
    type: String,
    unique: true,
    required: true,
    dropDups: true
  },

  description: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String,
    required: true,
    unique: true
  },

  uploads: {
    type: Array,
    required: false
  },

  createdAt: {
    type: Date,
    default: new Date()
  },

  updatedAt: {
    type: Date,
    default: new Date()
  },
  tag: {
    type: String,
    required: true
  },

  color: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: false
  },
  uid: {
    type: String,
    required: true
  }
}

const ProjectSchema = new Schema(Project);

ProjectSchema.index({index: 1});
export default mongodb.model('project', ProjectSchema);
