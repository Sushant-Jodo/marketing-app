import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const FilterClass = ({ filters, updateFilter, states, citys, landMarks }) => {
    return (
      <>
        <TextField
          id="outlined-basic"
          label="Pin code"
          variant="outlined"
          onChange={(e) => updateFilter("search", e.target.value)}
        />
        <FormControl variant="outlined" sx={{ width: "15%" }}>
          <InputLabel id="state-select-label">State</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={filters.state || ""}
            onChange={(e) => updateFilter("state", e.target.value)}
            label="State"
          >
            {states.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "15%" }}>
          <InputLabel id="state-select-label">City</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={filters.city || ""}
            onChange={(e) => updateFilter("city", e.target.value)}
            label="State"
          >
            {citys.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "15%" }}>
          <InputLabel id="state-select-label">Landmark</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={filters.landmark || ""}
            onChange={(e) => updateFilter("landmark", e.target.value)}
            label="LandMark"
          >
            {landMarks.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </>
    );
}
export default FilterClass