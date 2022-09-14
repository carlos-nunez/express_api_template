const express = require("express");
const mongoose = require("mongoose");
const SerialKey = mongoose.model("SerialKey");
const router = express.Router();
/**
ROUTES

router.post : create things in data base, send info
  ex: const license = new SerialKey({ key: '3diu', isVerified: true });
      license.save()

router.get : get info from database
    ex: const license = await SerialKey.findOne({key: 'xxx'})
        res.send(license)

router.put : update info from database
    ex: const license = new SerialKey({ key: , isVerified: true });
        license.isVerified = false;
        license.save()

router.delete : delete info from database
    ex: const license = await SerialKey.findOne({key: 'xxx'})
        license.remove()
        res.sendStatus(200)

**/

router.post("/newKey", async (req, res) => {
  const { key, verification_status } = req.body;

  console.log(key);

  try {
    const license = new SerialKey({ key, isVerified: true });
    await license.save();

    res.send({ license });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

/** :key or :param = req.key or req.param**/
router.get("/findKey/:key", async (req, res) => {
  try {
    const license = await SerialKey.findOne({ key: req.params.key });
    res.send({ license });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.get("/findKeys", async (req, res) => {
  try {
    //Array of licenses
    const licenses = SerialKey.find({});
    res.send({ licenses });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
