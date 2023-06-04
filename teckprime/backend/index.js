const express = require("express");
const cors = require("cors");
const dbConnect = require("./db");
const ProjectModel = require("./Model/Project");
const UserData = require("./Model/User");
require("dotenv").config()
const PORT = process.env.PORT ;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// login 

app.get("/", async (req, res) => {
  res.send("hellow")
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserData.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.send('Login successful');
  } catch (error) {
    res.status(500).json({ error });
  }
});

// for creating a user but not in frontend
app.post('/signup', async (req, res) => {
  try {
    const Data = new UserData(req.body);
    const saveData = await Data.save();
    res.status(201).json(saveData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


// making a post req
app.post('/project', async (req, res) => {
  try {
    const Data = new ProjectModel(req.body);
    const saveData = await Data.save();
    res.status(201).json(saveData);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});


// get all post list

app.get('/projects', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const projects = await ProjectModel.find()
      .skip(skip)
      .limit(limit);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error });
  }
});


// change status running 
app.patch('/statusrun/:id', async (req, res) => {
  try {
    const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'running' }, { new: true });
    res.json(updatedData || { error: 'Project not found' });
  } catch (error) {
    res.status(500).json({ error });
  }
});
// change status close 
app.patch('/statusclose/:id', async (req, res) => {
  try {
    const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'Closed' }, { new: true });
    res.json(updatedData || { error: 'Project not found' });
  } catch (error) {
    res.status(500).json({ error });
  }
});
// change status cancel 
app.patch('/statuscancel/:id', async (req, res) => {
  try {
    const updatedData = await ProjectModel.findByIdAndUpdate(req.params.id, { status: 'Cancelled' }, { new: true });
    res.json(updatedData || { error: 'Project not found' });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// total project count
app.get('/totalprojects', async (req, res) => {
  try {
    const totalCount = await ProjectModel.countDocuments();
    res.json(totalCount);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//cancelled
app.get('/canceledproject', async (req, res) => {
  try {
    const canceledCount = await ProjectModel.countDocuments({ status: 'Cancelled' });
    res.json(canceledCount);
  } catch (error) {
    res.status(500).json({ error });
  }
});
//RUNNING
app.get('/runningproject', async (req, res) => {
  try {
    const canceledCount = await ProjectModel.countDocuments({ status: 'running' });
    res.json(canceledCount);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//closed
app.get('/closedproject', async (req, res) => {
  try {
    const canceledCount = await ProjectModel.countDocuments({ status: 'Closed' });
    res.json(canceledCount);
  } catch (error) {
    res.status(500).json({ error });
  }
});





// app.get('/projects/run', async (req, res) => {
//   try {
//     const runningProjects = await ProjectModel.find({
//       status: 'running',
//       startDate: { $lt: { $date: new Date() } },
//       endDate: { $gt: { $date: new Date() } }
//     });

//     res.json(runningProjects);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// });

app.get('/department/:department', async (req, res) => {
  try {
    const department = req.params.department;
    const pageSize = 10;
    let pageNumber = 1;
    let totalCount = 0;
    let closedCount = 0;
    while (true) {
      const result = await ProjectModel.find({ Department: department })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .exec();
      totalCount += result.length;
      closedCount += result.filter(doc => doc.status === 'Closed').length;
      if (result.length < pageSize) {
        break;
      }
      pageNumber++;
    }
    const departmentStatus = {
      _id: department,
      totalCount,
      closedCount
    };

    res.json(departmentStatus);
  } catch (error) {
    res.status(500).json({ error });
  }
});






app.listen(PORT || 6000, () => {
  dbConnect();
  console.log(`Server started on port ${PORT}`);
});
