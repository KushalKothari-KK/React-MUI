import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
// React Table package for complex tables
const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Leonid",
    last_name: "Perigo",
    email: "lperigo0@arstechnica.com",
    gender: "Genderqueer",
    ip_address: "136.156.113.236",
  },
  {
    id: 2,
    first_name: "Mauricio",
    last_name: "Pirolini",
    email: "mpirolini1@cnet.com",
    gender: "Male",
    ip_address: "156.213.191.189",
  },
  {
    id: 3,
    first_name: "Carri",
    last_name: "Figiovanni",
    email: "cfigiovanni2@forbes.com",
    gender: "Female",
    ip_address: "158.44.189.119",
  },
  {
    id: 4,
    first_name: "Gauthier",
    last_name: "McPaik",
    email: "gmcpaik3@bandcamp.com",
    gender: "Male",
    ip_address: "243.154.149.170",
  },
  {
    id: 5,
    first_name: "Nina",
    last_name: "Canadas",
    email: "ncanadas4@chicagotribune.com",
    gender: "Female",
    ip_address: "25.18.148.255",
  },
  {
    id: 6,
    first_name: "Merell",
    last_name: "Dwyer",
    email: "mdwyer5@istockphoto.com",
    gender: "Male",
    ip_address: "69.211.89.109",
  },
  {
    id: 7,
    first_name: "Vikki",
    last_name: "Lancastle",
    email: "vlancastle6@jalbum.net",
    gender: "Female",
    ip_address: "131.123.90.48",
  },
  {
    id: 8,
    first_name: "Elli",
    last_name: "Gaffon",
    email: "egaffon7@intel.com",
    gender: "Female",
    ip_address: "88.196.241.145",
  },
  {
    id: 9,
    first_name: "Roarke",
    last_name: "Farlane",
    email: "rfarlane8@chicagotribune.com",
    gender: "Male",
    ip_address: "181.84.120.114",
  },
  {
    id: 10,
    first_name: "Neill",
    last_name: "Tippler",
    email: "ntippler9@miibeian.gov.cn",
    gender: "Male",
    ip_address: "50.183.13.106",
  },
];
