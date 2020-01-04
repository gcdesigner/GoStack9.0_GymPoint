import { endOfWeek, startOfWeek } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const checkins = await Checkin.findAll({
      order: ['createdAt'],
    });

    return res.json(checkins);
  }

  async show(req, res) {
    const { id } = req.params;

    /**
     * Check if students exists
     */
    const userExists = await Student.findOne({ where: { id } });
    if (!userExists) {
      return res.status(401).json({ error: 'Estudante não cadastrado' });
    }

    const checkins = await Checkin.findAll({
      where: { student_id: id },
      order: [['createdAt', 'DESC']],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const { id } = req.params;

    const endWeek = endOfWeek(new Date());
    const startWeek = startOfWeek(new Date());

    const student = await Checkin.findAndCountAll({
      where: {
        student_id: id,
        createdAt: {
          [Op.between]: [startWeek, endWeek],
        },
      },
    });

    if (student.count >= 5) {
      return res.status(400).json({ error: 'Limite de 5 checkins por semana' });
    }

    const checkin = await Checkin.create({
      student_id: id,
    });

    return res.json(checkin);
  }
}

export default new CheckinController();
