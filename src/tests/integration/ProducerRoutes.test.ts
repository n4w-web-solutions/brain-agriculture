import request from "supertest";
import app from "../../app";

describe("Producer Routes", () => {
    it("should create a new producer", async () => {
        const producerData = {
            cpf_cnpj: "12345678901",
            name: "John Doe",
            farm_name: "Farm X",
            city: "City Y",
            state: "State Z",
            total_area: 100,
            agricultural_area: 50,
            vegetation_area: 50
        };

        const response = await request(app).post("/producers").send(producerData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body.name).toBe("John Doe");
    });

    it("should list all producers", async () => {
        const response = await request(app).get("/producers");

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it("should fetch a single producer by ID", async () => {
        const response = await request(app).get("/producers/1");

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("id");
    });

    it("should update a producer by ID", async () => {
        const updateData = { name: "Updated Name" };
        const response = await request(app).put("/producers/1").send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Updated Name");
    });

    it("should delete a producer by ID", async () => {
        const response = await request(app).delete("/producers/1");

        expect(response.status).toBe(204);
    });
});
