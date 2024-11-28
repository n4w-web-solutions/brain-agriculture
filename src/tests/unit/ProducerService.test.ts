import { CreateProducerDTO } from "../../dtos/CreateProducerDTO";
import { ProducerService } from "../../services/ProducerService";

describe("ProducerService", () => {
    it("should throw an error if agricultural + vegetation area exceeds total area", async () => {
        const invalidProducer: CreateProducerDTO = {
            cpf_cnpj: "12345678901",
            name: "John Doe",
            farm_name: "Farm A",
            city: "City A",
            state: "ST",
            total_area: 100,
            agricultural_area: 60,
            vegetation_area: 50,
            crops: ["Soja", "Arroz"],
        };

        await expect(ProducerService.create(invalidProducer)).rejects.toThrow(
            "Agricultural and vegetation area exceeds total area."
        );
    });
});