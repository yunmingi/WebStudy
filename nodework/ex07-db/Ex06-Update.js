const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const path = require('path');

// Express 앱 생성
const app = express();
const port = 3000;

// 정적 파일 서빙 설정
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL 커넥션 풀 설정
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'mydb'
});

// `ex06.html` 파일 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ex06.html'));
});

// 학생 정보 업데이트 API
app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { student_name, birth, gender, intro } = req.body;

  try {
    const connection = await pool.getConnection();
    const query = 'UPDATE students SET student_name = ?, birth = ?, gender = ?, intro = ? WHERE student_id = ?';
    const [result] = await connection.execute(query, [student_name, birth, gender, intro, id]);

    connection.release();

    if (result.affectedRows === 0) {
      return res.status(404).send('학생 정보를 찾을 수 없음');
    }

    res.send('학생 정보 수정 성공');
  } catch (err) {
    console.error('쿼리 실행 에러:', err);
    res.status(500).send('서버 에러');
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
